import trophy from "../assets/icons/trophy.svg";
import medal from "../assets/icons/medal.svg";
import star from "../assets/icons/star.svg";
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
    case "time":
      image = clock;
      color = "#9747FF";
      break;
  }

  return (
    <div className="gap-2 inline-flex items-center justify-center shadow-[0px_4px_10px_1px_#00000026] rounded-[5px] py-2.75 px-6">
      <img src={image} />
      <div style={{ color }}>{`${name} ${type === "time" ? `00:${value}` : value}`}</div>
    </div>
  );
};

export default QuizButton;
