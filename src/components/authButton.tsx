import React from "react";

interface AuthButtonProps {
  providerImg: string;
  providerName: string;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  providerImg,
  providerName,
  onClick
}) => {
  return (
    <button className="flex items-center justify-center gap-4 w-full shadow-[0px_0px_10px_1px_#0000001A] py-4 bg-white text-[14px] tracking-wide text-black rounded-[10px] cursor-pointer" onClick={onClick}>
      <img src={providerImg} className="w-[24px] aspect-square"/>
      Prijavi se putem {providerName} računa
    </button>
  );
};

export default AuthButton;
