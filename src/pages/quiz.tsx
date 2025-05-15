import { useState, useEffect, useRef } from "react";
import usePopup from "../hooks/togglePopup";
import fetchData from "../hooks/fetchData";
import CountdownBar from "../components/countdown";

import Logo from "../assets/logo.svg";
import Button from "../components/button";
import Answer from "../components/answer";
import { QuizDonePopup } from "../components/popup";
import QuizButton from "../components/quizButton";

interface Option {
  text: string;
  [key: string]: unknown;
}

interface Question {
  _id: string;
  title: string;
  options: Option[];
}

const Quiz: React.FC = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [gameId, setGameId] = useState<unknown>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answeredIndex, setAnsweredIndex] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [message, setMessage] = useState(
    "Čestitke! Odgovorio si tačno na sva pitanja!"
  );

  const isMobile = window.innerWidth < 768;
  const { openPopup } = usePopup();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startGame = async () => {
      try {
        const response = await fetchData({
          url: "https://quiz-be-zeta.vercel.app/game/start",
          object: { method: "POST" },
        });
        setGameId(response.gameId);
        setQuestion(response.question);
        setTimeLeft(30);
      } catch (error) {
        console.error("Greška prilikom pokretanja igre", error);
      }
    };
    startGame();
  }, []);

  useEffect(() => {
    if (question) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleAnswer(-1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timerRef.current!);
    }
  }, [question]);

  useEffect(() => {
    if (timeLeft === 0) {
      openPopup();
    }
  }, [timeLeft, openPopup]);

  const handleAnswer = async (index: number) => {
    if (!gameId || !question || answeredIndex !== null || isAnswering) return;

    try {
      setIsAnswering(true);
      clearInterval(timerRef.current!);

      const selectedOptionText = question.options[index]?.text;

      const response = await fetchData({
        url: "https://quiz-be-zeta.vercel.app/game/answer",
        object: {
          method: "POST",
          body: JSON.stringify({
            gameId,
            questionId: question._id,
            answer: selectedOptionText,
          }),
        },
      });

      setCorrectAnswer(response.correct);
      setAnsweredIndex(index);

      if (index === -1) setMessage("Vrijeme je isteklo");
      else if (response.reason === "wrong_answer")
        setMessage("Netačan odgovor");
      else setMessage("Tačan odgovor!");

      setIsAnswering(false);

      setTimeout(() => {
        if (response.gameOver) {
          openPopup();
        } else {
          setScore(response.score);
          setQuestion(response.nextQuestion);
          setTimeLeft(30);
          setAnsweredIndex(null);
          setCorrectAnswer(null);
        }
      }, 3000);
    } catch (error) {
      console.error("Greška prilikom slanja odgovora", error);
      setIsAnswering(false);
    }
  };

  const handleEndQuiz = () => {
    setMessage("Zavšili ste kviz.");
    openPopup();
  };

  return (
    <div className="flex flex-col w-screen items-center md:mt-15 mt-12 z-1">
      <QuizDonePopup score={score} message={message} />
      <img src={Logo} className="md:h-11 h-6" alt="Logo" />
      <div className="w-[calc(60vw+8rem)] flex flex-col items-center justify-center p-4">
        <div className="w-full flex md:gap-8 gap-5 justify-between items-center md:mt-8 mt-[-1rem] p-8 px-2">
          <QuizButton
            type="score"
            name={!isMobile ? "Bodovi" : ""}
            value={score}
          />
          <QuizButton
            type="time"
            name={!isMobile ? "Vrijeme" : ""}
            value={timeLeft}
          />
        </div>
        <div className="w-full rounded-[6px] md:rounded-[20px] shadow-[0px_4px_10px_1px_#00000026] overflow-visible z-10">
          <div className="bg-[#2559D2] flex justify-between items-center px-6 md:px-10 py-5">
            <p className="text-white text-center text-[14px] md:text-[1rem]">
              Pitanje {score + 1}.
            </p>
            <Button
              onClick={handleEndQuiz}
              className="bg-white hover:bg-gray-100 text-[#2559D2] font-medium py-2 md:py-2.5 px-4 md:px-6 rounded-lg transition-all duration-200 text-[12px] md:text-[14px] shadow-sm hover:shadow-md border border-transparent hover:border-gray-200 cursor-pointer"
            >
              Završi kviz
            </Button>
          </div>
          <p className="text-center m-7 md:m-10 text-[14px] md:text-[20px]">
            {question ? question.title : "Učitavanje pitanja..."}
          </p>
          <div className="w-[60%] relative left-[20%]">
            {question && <CountdownBar time={timeLeft} maxTime={30} />}
          </div>
          <div className="flex flex-col gap-6 p-6 md:p-15">
            {question?.options?.map((option, index) => {
              const isDisabled = isAnswering;

              if (answeredIndex !== null) {
                if (index === answeredIndex) {
                  if (correctAnswer) {
                    return (
                      <Answer.Correct
                        key={`${question._id}-${index}`}
                        index={index}
                        onClick={() => {}}
                      >
                        {option.text}
                      </Answer.Correct>
                    );
                  }
                  return (
                    <Answer.Wrong
                      key={`${question._id}-${index}`}
                      index={index}
                      onClick={() => {}}
                    >
                      {option.text}
                    </Answer.Wrong>
                  );
                }

                return (
                  <Answer
                    key={`${question._id}-${index}`}
                    index={index}
                    onClick={() => {}}
                    disableHover={true}
                    disabled={true}
                  >
                    {option.text}
                  </Answer>
                );
              }

              return (
                <Answer
                  key={`${question._id}-${index}`}
                  index={index}
                  onClick={() => handleAnswer(index)}
                  disableHover={isDisabled}
                  disabled={isDisabled}
                >
                  {option.text}
                </Answer>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
