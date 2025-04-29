import { useNavigate } from "react-router-dom";
import Button from "./button";
import usePopup from "../hooks/togglePopup";

import Logo from "../assets/logo.svg";
import Trophy from "../assets/icons/trophy.svg";
import Clock from "../assets/icons/clock.svg";
import Medal from "../assets/icons/medal.svg";

const QuizPopup: React.FC = () => {
  const { closePopup } = usePopup();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token")?.length);

  const handleButtonClick = () => {
    if (!isLoggedIn) navigate("/login");
    else navigate("/quiz");
  };

  return (
    <div
      className=" fixed inset-0 bg-opacity-50 backdrop-blur-xs z-100 transition-3 flex items-center justify-center"
      id="popup"
    >
      <div className="sm:aspect-[4/5] sm:h-[70vh] mx-6 px-11 py-12 flex flex-col gap-4 rounded-2xl bg-red-50">
        <div className="flex items-center">
          <img src={Logo} className="h-6" />
        </div>
        <div className="gap-3 flex flex-col">
          <h2 className="font-medium text-2xl">Spremite se za kviz!</h2>
          <p className="text-[14px] opacity-60">
            Pažljivo birajte odgovore i pokušajte osvojiti što više bodova prije
            nego istekne
          </p>
        </div>
        <div>
          <div>
            <img src={Trophy} />
          </div>
          <div>
            <img src={Clock} />
          </div>
          <div>
            <img src={Medal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPopup;
