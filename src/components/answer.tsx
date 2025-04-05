interface AnswerProps {
  answer: string;
  option: string;
  onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, option, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="">{option.toUpperCase()}</div>
      {answer}
    </div>
  );
};

export default Answer;
