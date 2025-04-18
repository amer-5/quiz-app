import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";

const Buttons = (
  isLogged: boolean,
  closeMenu: () => void,
  isMobile: boolean = false
) => {
  const buttonStyle =
    "text-center rounded-[5px] px-6 py-2 tracking-wider cursor-pointer";
  return (
    <div className={`flex ${isMobile ? "flex-col gap-4" : "gap-7"}`}>
      {!isLogged ? (
        <>
          <Link to="/login" onClick={closeMenu}>
            <Button
              className={`${buttonStyle} text-[#2559D2] border-[#2559D2] border-[1px]`}
            >
              Prijavi se
            </Button>
          </Link>
          <Link to="/register" onClick={closeMenu}>
            <Button
              className={`${buttonStyle} bg-[#2559D2] text-white border-[#2559D2] border-[1px]`}
            >
              Registruj se
            </Button>
          </Link>
        </>
      ) : (
        <Link to="/login" onClick={closeMenu}>
          <Button
            onClick={() => localStorage.removeItem("token")}
            className={`${buttonStyle} text-[#2559D2] border-[#2559D2] border-[1px]`}
          >
            Odjavi se
          </Button>
        </Link>
      )}
    </div>
  );
};

const Navigation: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isLogged = Boolean(localStorage.getItem("token"));

  const toggleMenu = () => setIsOpened(!isOpened);
  const closeMenu = () => setIsOpened(false);

  return (
    <div className="w-screen 2xl:py-15 2xl:px-30 xl:py-14 xl:px-28 lg:py-13 lg:px-26 md:py-12 md:px-18 py-11 px-10 flex justify-between items-center relative">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-5 md:h-11" />
      </Link>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-[#2559D2]"></span>
          <span className="block w-6 h-0.5 bg-[#2559D2]"></span>
          <span className="block w-6 h-0.5 bg-[#2559D2]"></span>
        </div>
      </div>

      <div className="hidden md:flex gap-5">
        <Link to="/">
          <p>Početna</p>
        </Link>
        <Link to="/guides">
          <p>Uputstva</p>
        </Link>
        <Link to="/leaderboard">
          <p>Ljestvica</p>
        </Link>
      </div>
      <div className="hidden md:flex gap-7">{Buttons(isLogged, closeMenu)}</div>

      <div
        className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ease-in-out ${
          isOpened ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link to="/" onClick={closeMenu}>
          <p>Početna</p>
        </Link>
        <Link to="/guides" onClick={closeMenu}>
          <p>Uputstva</p>
        </Link>
        <Link to="/leaderboard" onClick={closeMenu}>
          <p>Ljestvica</p>
        </Link>
        {Buttons(isLogged, closeMenu, true)}
      </div>
    </div>
  );
};

export default Navigation;
