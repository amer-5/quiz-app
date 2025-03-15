import { useNavigate } from "react-router-dom";
import bg from "../assets/blue-bg2.png";
import emoji from "../assets/icons/popup2.png";
import Button from "./button";
import usePopup from "../hooks/togglePopup";

const QuizDonePopup: React.FC = () => {
  const { closePopup } = usePopup();
  const navigate = useNavigate();
  const points = 120;

  const handleClose = () => {
    closePopup();
    navigate("/");
  };

  return (
    <div
      className="hidden fixed inset-0 bg-opacity-50 backdrop-blur-xs z-40 transition-3"
      id="popup"
      onClick={handleClose}
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
          Čestitamo na završenom kvizu
        </h2>
        <p className="text-[0.825rem] md:text-[1rem] text-white text-center opacity-60 w-[90vw] my-5 md:my-0 md:w-2/3">
          Osvojili ste:
        </p>
        <Button className="text-[#2559D2] font-bold text-xl bg-white rounded-[10px] py-3 md:py-4 w-[75vw] md:w-auto px-0 md:px-25 shadow-[0px_0px_10px_1px_#ffffff]">{`${points} bodova`}</Button>
        <img
          src={emoji}
          alt="/"
          className="md:my-4 md:mt-6 scale-90 my-3 mt-4 md:scale-125"
        />
        <Button
          onClick={handleClose}
          className="text-white font-bold text-xl rounded-[10px] py-3 md:py-4 w-[70vw] md:w-auto px-0 md:px-29 shadow-[0px_0px_10px_1px_#5788FA] md:mt-14 cursor-pointer"
        >
          Zatvori
        </Button>
      </div>
    </div>
  );
};

export default QuizDonePopup;
