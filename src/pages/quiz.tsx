import Logo from "../assets/logo.svg";
import QuizButton from "../components/quizButton";
import Button from "../components/button";
import CountdownBar from "../components/countdown";
import Answer from "../components/answer";

const Quiz: React.FC = () => {
  const score = 0;
  const isMobile = window.innerWidth < 768;
  const question = {
    text: "Koji historijski događaj se desio 25. novembra 1943. godine u Mrkonjić Gradu, a smatra se jednim od najvažnijih trenutaka u historiji Bosne i Hercegovine jer je tada donesena odluka o njenoj budućnosti kao ravnopravne republike unutar Jugoslavije?",
    answers: [
      "Održana je prva sjednica ZAVNOBiH-a",
      "Održana je prva sjednica ZAVNOBiH-a",
      "Održana je prva sjednica ZAVNOBiH-a",
      "Održana je prva sjednica ZAVNOBiH-a",
    ],
  };
  return (
    <div className="flex flex-col w-screen items-center md:mt-15 mt-12 z-1">
      <img src={Logo} className="md:h-11 h-6" />
      <div className="w-[calc(60vw+8rem)] flex flex-col items-center justify-center p-4">
        <div className="w-full flex md:gap-8 gap-5 justify-between items-center md:mt-8 mt-[-1rem]  p-8 px-2">
          <QuizButton type="score" name={!isMobile ? "Bodovi" : ""} value={score} />
          <QuizButton type="highScore" name={!isMobile ? "Najbolji rezultat" : ""} value={120} />
          <QuizButton type="time" name={!isMobile ? "Vrijeme" : ""} value={12} />
        </div>
        <div className="w-full rounded-[6px] md:rounded-[20px] shadow-[0px_4px_10px_1px_#00000026] overflow-visible z-10">
          <div className="bg-[#2559D2] flex justify-between items-center px-6 md:px-10 py-5">
            <Button className="py-1 md:py-3 px-2 md:px-5 bg-red-500 rounded-[2px] md:rounded-[10px] text-white text-[12px] md:text-[1rem] cursor-pointer">
              Završi kviz
            </Button>
            <p className="text-white text-center text-[14px] md:text-[1rem]">Pitanje {score + 1}.</p>
            <Button className="py-1 md:py-3 px-2 md:px-5 bg-white rounded-[2px] md:rounded-[10px] text-[12px] md:text-[1rem] text-[#2559D2] cursor-pointer">
              Sljedeće pitanje
            </Button>
          </div>
          <p className="text-center m-7 md:m-10 text-[14px] md:text-[20px]">{question.text}</p>
          <div className="w-[60%] relative left-[20%]">
            <CountdownBar time={30} />
          </div>
          <div className="flex flex-col gap-6 p-6 md:p-15">
            {question.answers.map((answer, index) => (
              <Answer index={index} onClick={() => console.log(true)}>
                {answer}
              </Answer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
