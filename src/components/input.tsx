import React from "react";

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
    <div className={`relative w-full ${className}`}>
      <input
        className="w-full border-none border-b border-gray-400 bg-transparent outline-none focus:border-transparent pb-[0.5rem] px-[0.5rem]"
        value={inputValue}
        placeholder={inputPlaceholder}
        onChange={onChange}
      />
      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-40"></span>
    </div>
  );
};

export default Input;
