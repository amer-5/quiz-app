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
  }

  return (
    <div
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-xs z-40 transition-3"
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
        className="w-[90vw] aspect-[19/10] fixed left-[50%] translate-[-50%] top-[50%] z-50 flex flex-col items-center py-8 rounded-[16px]"
      >
        <h2 className="text-5xl text-center font-bold text-white overflow-hidden pt-20">
          Čestitamo na završenom kvizu
        </h2>
        <p className="text-white opacity-60 py-6">Osvojili ste:</p>
        <Button className="text-[#2559D2] font-bold text-xl bg-white rounded-[10px] py-4 px-25 shadow-[0px_0px_10px_1px_#ffffff]">{`${points} bodova`}</Button>
        <img src={emoji} alt="/" className="my-4 mt-6 scale-125 pt-6" />
        <Button
          onClick={closePopup}
          className="text-white font-bold text-xl rounded-[10px] py-4 px-29 shadow-[0px_0px_10px_1px_#5788FA] mt-14 cursor-pointer"
        >
          Zatvori
        </Button>
      </div>
    </div>
  );
};

export default QuizDonePopup;
