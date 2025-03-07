import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";

const Navigation: React.FC = () => {
  const isLogged = Boolean(localStorage.getItem("token"));

  const Buttons = (isLogged: boolean) => {
    if (!isLogged) {
      return (
        <>
          <Link to="/login">
            <Button className="text-[#2559D2] border-[#2559D2] border-[1px] rounded-[5px] px-6 py-2 tracking-wider cursor-pointer">
              Prijavi se
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-[#2559D2] border-[#2559D2] border-[1px] text-white rounded-[5px] px-6 py-2 tracking-wider cursor-pointer">
              Registruj se
            </Button>
          </Link>
        </>
      );
    }
    return (
      <Link to="/login">
        <Button
          onClick={() => localStorage.removeItem("token")}
          className="text-[#2559D2] border-[#2559D2] border-[1px] rounded-[5px] px-6 py-2 tracking-wider cursor-pointer"
        >
          Odjavi se
        </Button>
      </Link>
    );
  };

  return (
    <div className="w-screen py-15 px-30 flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex gap-5">
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
      <div className="flex gap-7">{Buttons(isLogged)}</div>
    </div>
  );
};

export default Navigation;
