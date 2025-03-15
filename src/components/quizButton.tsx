import trophy from "../assets/icons/trophy.svg";
import medal from "../assets/icons/medal.svg";
import clock from "../assets/icons/clock.svg";

interface quizButtonProps {
  name: string;
  value: number;
  type: string;
}

const QuizButton: React.FC<quizButtonProps> = ({ name, value, type }) => {
  let image, color;

  switch (type) {
    case "score":
      image = trophy;
      color = "#2559D2";
      break;
    case "highScore":
      image = medal;
      color = "#FBBC05";
      break;
    case "time":
      image = clock;
      color = "#9747FF";
      break;
  }

  return (
    <div className="gap-2 inline-flex items-center justify-center shadow-[0px_4px_10px_1px_#00000026] rounded-[5px] py-2.5 md:py-2.75 px-3 md:px-6">
      <img src={image} className="aspect-square h-5 md:h-7.5"/>
      <div style={{ color }}>{`${name}: ${value}`}</div>
    </div>
  );
};

export default QuizButton;
