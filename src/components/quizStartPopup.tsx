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
        className="w-screen h-screen rounded-0 md:w-[90vw] md:aspect-[19/10] fixed left-[50%] translate-[-50%] top-[50%] z-50 flex flex-col justify-center md:justify-around items-center py-8 md:rounded-[16px]"
      >
        <h2 className="text-white font-bold text-2xl md:text-[2.5rem] text-center">
          Spremite se za Quiz BiH
        </h2>
        <p className="text-[0.75rem] md:text-[1rem] text-white text-center opacity-60 w-[90vw] my-3 md:my-0 md:w-2/3">
          Svaki tačan odgovor donosi vam bodove, ali budite brzi - imate samo 10
          sekundi po pitanju! Pažljivo birajte odgovore i pokušajte osvojiti što
          više bodova prije nego istekne vrijeme. Jeste li spremni pokazati
          svoje znanje? Sretno! 🎉
        </p>
        <img src={emoji} alt="/" className="md:my-4 md:mt-6 scale-90 md:scale-125" />
        <Button
          className={`bg-white text-[#2559D2] font-bold rounded-[10px] w-[70vw] md:w-auto text-[1.25rem] py-3 md:py-4 md:px-30 cursor-pointer ${
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
