import { useState } from "react";

interface ButtonProps {
  children: string;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  loading = false,
}) => {
  const [text, setText] = useState("Loading");

  setTimeout(() => {
    if (text.length < 10) setText(text + ".");
    else setText("Loading");
  }, 1000);

  return (
    <button
      className={`${className} ${loading ? "opacity-60" : ""}`}
      onClick={onClick}
    >
      {loading ? text : children}
    </button>
  );
};

export default Button;
