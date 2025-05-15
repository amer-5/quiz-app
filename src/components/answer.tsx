interface AnswerProps {
  children: string;
  index: number;
  option?: () => string;
  onClick: () => void;
  className?: string;
  optionColor?: string;
  disableHover?: boolean;
  disabled?: boolean;
}

const Answer: React.FC<AnswerProps> & {
  Correct: React.FC<AnswerProps>;
  Wrong: React.FC<AnswerProps>;
} = ({
  children,
  index,
  onClick,
  className = "",
  optionColor = "black",
  disableHover = false,
  disabled = false,
}) => {
  const option = () => {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
    }
  };

  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`
        w-full text-[12px] pointer-cursor md:text-[1rem] transition-[.3s] py-4 px-3 md:px-5
        shadow-[0px_0px_10px_4px_#0000001A] rounded-[5px] flex items-center
        ${disableHover ? "" : "group hover:bg-[#eff4ff]"}
        ${disabled ? "pointer-events-none opacity-40" : ""}
        ${className}
      `}
    >
      <div
        className={`
          text-[12px] md:text-2xl border-black border-solid border-1 pointer-cursor
          mr-3 md:mr-8 font-light rounded-full flex items-center justify-center
          overflow-hidden h-[24px] md:h-[30px] w-[24px] md:w-[30px]
          min-w-[24px] min-h-[24px] bg-white
        `}
        style={{ color: optionColor }}
      >
        {option()}
      </div>
      {children}
    </div>
  );
};

Answer.Correct = (props) => (
  <Answer
    {...props}
    className="bg-[#34A853] text-white"
    optionColor="#34A853"
    disableHover={true}
  />
);

Answer.Wrong = (props) => (
  <Answer
    {...props}
    className="bg-[#D22528] text-white"
    optionColor="#D22528"
    disableHover={true}
  />
);

export default Answer;
