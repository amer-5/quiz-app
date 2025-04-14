import { useState, useEffect } from "react";
import usePopup from "../hooks/togglePopup";
import fetchData from "../hooks/fetchData";

import Logo from "../assets/logo.svg";
import QuizButton from "../components/quizButton";
import Button from "../components/button";
import CountdownBar from "../components/countdown";
import Answer from "../components/answer";
import QuizDonePopup from "../components/quizDonePopup";

const Quiz: React.FC = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<any>(null);
  const [gameId, setGameId] = useState<any>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const isMobile = window.innerWidth < 768;

  const { openPopup } = usePopup();

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
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAnswer(-1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [question]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsGameOver(true);
      openPopup();
    }
  }, [timeLeft, openPopup]);

  const handleAnswer = async (index: number) => {
    if (!gameId || !question) return;

    try {
      const response = await fetchData({
        url: "https://quiz-be-zeta.vercel.app/game/answer",
        object: {
          method: "POST",
          body: JSON.stringify({
            gameId,
            questionId: question._id,
            answer: index,
          }),
        },
      });

      if (response.gameOver) {
        setIsGameOver(true);
        openPopup();
      } else {
        setScore(response.score);
        setQuestion(response.nextQuestion);
        setTimeLeft(30);
      }
    } catch (error) {
      console.error("Greška prilikom slanja odgovora", error);
    }
  };

  const handleEndQuiz = () => {
    setIsGameOver(true);
    openPopup();
  };

  return (
    <div className="flex flex-col w-screen items-center md:mt-15 mt-12 z-1">
      <QuizDonePopup score={score} />
      <img src={Logo} className="md:h-11 h-6" alt="Logo" />
      <div className="w-[calc(60vw+8rem)] flex flex-col items-center justify-center p-4">
        <div className="w-full flex md:gap-8 gap-5 justify-between items-center md:mt-8 mt-[-1rem]  p-8 px-2">
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
              className="py-1 md:py-3 px-2 md:px-5 bg-red-500 rounded-[2px] md:rounded-[10px] text-white text-[12px] md:text-[1rem] cursor-pointer"
            >
              Završi kviz
            </Button>
          </div>
          <p className="text-center m-7 md:m-10 text-[14px] md:text-[20px]">
            {question ? question.title : "Učitavanje pitanja..."}
          </p>
          <div className="w-[60%] relative left-[20%]">
            <CountdownBar time={30} />
          </div>
          <div className="flex flex-col gap-6 p-6 md:p-15">
            {question?.options?.map((option: unknown, index: number) => (
              <Answer
                key={index}
                index={index}
                onClick={() => handleAnswer(index)}
              >
                {option?.text}
              </Answer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
