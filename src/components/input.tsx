import React, { useState } from "react";
import show from "../assets/icons/show.svg";
import hide from "../assets/icons/hide.svg";

interface InputProps {
  inputPlaceholder: string;
  inputValue?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  inputPlaceholder,
  className,
  inputValue,
  onChange,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        className="w-full border-none border-b border-gray-400 bg-transparent outline-none focus:border-transparent pb-[0.5rem] px-[0.5rem]"
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={onChange}
        type={type === "password" && !showPassword ? "password" : "text"}
      />
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-40"></span>
      {type === "password" && (
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-50"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <img src={hide} /> : <img src={show} />}
        </button>
      )}
    </div>
  );
};

export default Input;
