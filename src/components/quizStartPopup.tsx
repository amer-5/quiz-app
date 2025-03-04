import { useNavigate } from "react-router-dom";
import bg from "../assets/blue-bg2.png";
import emoji from "../assets/icons/popup1.png";
import Button from "./button";
import usePopup from "../hooks/togglePopup";

const QuizPopup: React.FC = () => {
  const { closePopup } = usePopup();
  const navigate = useNavigate();
  const isLogged: boolean =
    localStorage.getItem("token")?.length > 0 ? true : false;

  const handleButtonClick = () => {
    if (!isLogged) navigate("/login");
    else navigate("/quiz");
  };

  return (
    <div
      className="hidden fixed inset-0 bg-opacity-50 backdrop-blur-xs z-40 transition-3"
      id="popup"
      onClick={closePopup}
    >
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[90vw] aspect-[19/10] fixed left-[50%] translate-[-50%] top-[50%] z-50 flex flex-col justify-around items-center py-8 rounded-[16px]"
      >
        <h2 className="text-white font-bold text-[2.5rem] text-center">
          Spremite se za Quiz BiH
        </h2>
        <p className="text-white text-center opacity-60 w-2/3">
          Svaki tačan odgovor donosi vam bodove, ali budite brzi - imate samo 10
          sekundi po pitanju! Pažljivo birajte odgovore i pokušajte osvojiti što
          više bodova prije nego istekne vrijeme. Jeste li spremni pokazati
          svoje znanje? Sretno! 🎉
        </p>
        <img src={emoji} alt="/" className="my-4 mt-6 scale-125" />
        <Button
          className={`bg-white text-[#2559D2] font-bold rounded-[10px] text-[1.25rem] py-4 px-30 cursor-pointer ${
            !isLogged ? "bg-red-400 opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleButtonClick}
        >
          {isLogged ? "Započni kviz" : "Prijavite se"}
        </Button>
      </div>
    </div>
  );
};

export default QuizPopup;
