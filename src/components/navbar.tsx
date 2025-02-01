import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";;

const Navigation: React.FC = () => {
  return (
    <div className="w-screen py-15 px-30 flex justify-between items-center"> {/* Navbar */}
      <Link to="/"> {/* Logo*/}
        <img src={Logo} />
      </Link>
      <div className="flex gap-5"> {/* Links */}
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
      <div className="flex gap-7"> {/* Buttons */}
        <Link to="/login">
          <Button
            buttonText="Prijavi se"
            className="text-[#2559D2] border-[#2559D2] border-[1px] rounded-[5px] px-6 py-2 tracking-wider"
          />
        </Link>
        <Link to="/register">
          <Button
            buttonText="Registruj se"
            className="bg-[#2559D2] border-[#2559D2] border-[1px] text-white rounded-[5px] px-6 py-2 tracking-wider"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
