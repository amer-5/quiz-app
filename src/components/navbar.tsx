import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";

const Navigation: React.FC = () => {
  return (
    <div className="">
      <Link to="/"> {/* Logo*/}
        <img src={Logo} />
      </Link>
      <div> {/* Links */}
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
      <div> {/* Buttons */}
        <Link to="/login">
          <Button buttonText="Prijavi se"/>
        </Link>
        <Link to="/register">
          <Button buttonText="Registruj se"/>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
