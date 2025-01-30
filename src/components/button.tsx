interface ButtonProps {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ buttonText, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
