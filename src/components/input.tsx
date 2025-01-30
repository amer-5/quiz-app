interface InputProps {
  inputPlaceholder: string;
  inputValue?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  inputPlaceholder,
  className,
  inputValue,
  onChange,
}) => {
  return (
    <input
      className={className}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={onChange}
    />
  );
};

export default Input;
