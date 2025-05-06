import { useNavigate } from "react-router-dom";
import Button from "./button";
import usePopup from "../hooks/togglePopup";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Trophy from "../assets/icons/trophy.svg";
import Clock from "../assets/icons/clock.svg";
import Medal from "../assets/icons/medal.svg";
import Message from "../assets/icons/message.svg";

export const QuizDonePopup = ({
  score,
  message,
}: {
  score: number;
  message: string;
}) => {
  const { closePopup } = usePopup();
  const navigate = useNavigate();

  const handleClose = () => {
    closePopup();
    navigate("/");
  };

  let brojBodova;

  if (score % 10 === 1) brojBodova = score + " bod";
  else if ([2, 3, 4].includes(score % 10)) brojBodova = score + " boda";
  else brojBodova = score + " bodova";

  return (
    <div
      className="hidden fixed inset-0 bg-opacity-50 backdrop-blur-xs z-100 transition-3 flex items-center justify-center"
      id="popup"
    >
      <div className="sm:aspect-[4/5] sm:h-[60vh] mx-6 px-11 py-12 flex flex-col justify-between gap-4 rounded-2xl bg-white">
        <div className="flex items-center">
          <img src={Logo} className="h-6" />
        </div>
        <div className="gap-3 flex flex-col">
          <h2 className="font-medium text-2xl">
            Čestitamo na završenom kvizu!
          </h2>
          <p className="text-[14px] opacity-60">
            U prilogu pogledajte svoju statistiku:
          </p>
        </div>
        <div className="flex gap-2">
          <img src={Trophy} />
          <p>
            Osvojili ste: <span>{brojBodova}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <img src={Message} />
          <p>
            {message}
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 w-100%">
          <Button
            className="text-center rounded-[10px] py-3 tracking-wider cursor-pointer w-1/2 text-[#2559D2] border-[#2559D2] border-[1px]"
            onClick={handleClose}
          >
            Zatvori
          </Button>
          <Link
            to="/leaderboard"
            className="text-center rounded-[10px] py-3 tracking-wider cursor-pointer w-1/2 bg-[#2559D2] text-white border-[#2559D2] border-[1px]"
          >
            Ljestvica
          </Link>
        </div>
      </div>
    </div>
  );
};

export const QuizPopup: React.FC = () => {
  const { closePopup } = usePopup();
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token")?.length);

  const handleButtonClick = () => {
    if (!isLoggedIn) navigate("/login");
    else navigate("/quiz");
  };

  return (
    <div
      className="hidden fixed inset-0 bg-opacity-50 backdrop-blur-xs z-100 transition-3 flex items-center justify-center"
      id="popup"
    >
      <div className="sm:aspect-[4/5] sm:h-[60vh] mx-6 px-11 py-12 flex flex-col justify-between gap-4 rounded-2xl bg-white">
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
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <img src={Trophy} className="flex items-center justify-center" />
            <p className="opacity-60">Svaki tačan odgovor nosi po 1 bod</p>
          </div>
          <div className="flex gap-3">
            <img src={Clock} className="flex items-center justify-center" />
            <p className="opacity-60">
              Za svako pitanje imate 30 sekundi da odgovorite
            </p>
          </div>
          <div className="flex gap-3">
            <img src={Medal} className="flex items-center justify-center" />
            <p className="opacity-60">
              Ostvari što bolji rezultat i rangiraj se na ljestvicu
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 w-100%">
          <Button
            className="text-center rounded-[10px] py-3 tracking-wider cursor-pointer w-1/2 text-[#2559D2] border-[#2559D2] border-[1px]"
            onClick={closePopup}
          >
            Odustani
          </Button>
          <Button
            className="text-center rounded-[10px] py-3 tracking-wider cursor-pointer w-1/2 bg-[#2559D2] text-white border-[#2559D2] border-[1px]"
            onClick={handleButtonClick}
          >
            Pokreni kviz
          </Button>
        </div>
      </div>
    </div>
  );
};
