import Logo from "../assets/logo.svg";
import QuizButton from "../components/quizButton";
import Button from "../components/button";

const Quiz: React.FC = () => {
  const score = 0;
  return (
    <div className="flex flex-col w-screen items-center mt-15">
      <img src={Logo} className="h-11" />
      <div className="w-[60vw] flex flex-col items-center justify-center">
        <div className="w-full flex gap-8 justify-between items-center mt-8 p-8 px-2">
          <QuizButton type="score" name="Bodovi" value={score} />
          <QuizButton type="highScore" name="Najbolji rezultat" value={120} />
          <QuizButton type="streak" name="Streak" value={120} />
          <QuizButton type="time" name="Vrijeme" value={12} />
        </div>
        <div className="w-full rounded-[20px] shadow-[0px_4px_10px_1px_#00000026]">
          <div className="bg-[#2559D2]">
            <Button>Završi kviz</Button>
            <p className="">Pitanje {score + 1}</p>
            <Button>Sljedeće pitanje</Button>
          </div>
          sadfadssafasd
        </div>
      </div>
    </div>
  );
};

export default Quiz;
