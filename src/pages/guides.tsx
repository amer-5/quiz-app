import Image1 from "../assets/cards/card-1.png";
import Image2 from "../assets/cards/card-2.png";
import Image3 from "../assets/cards/card-3.png";
import magic_wand from "../assets/icons/magic_wand.svg";
import Card from "../components/card";
import Button from "../components/button";
import QuizPopup from "../components/quizStartPopup";
import usePopup from "../hooks/togglePopup";
import { Link } from "react-router-dom";

const Guides: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <>
      <QuizPopup />
      <div className="flex justify-between w-[calc(100vw-12.5rem)] mx-auto mt-10">
        <div className="w-[60%]">
          <div className="flex items-center gap-5">
            <img
              src={magic_wand}
              alt="Magic Wand"
              className="flex items-center"
            />
            <h2 className="flex items-center text-[2.5rem] font-bold">
              Kako funkcioniše kviz?
            </h2>
          </div>
          <p className="opacity-60 mt-4">
            U našem kvizu, jednostavno je izazvati sebe i druge! Odaberite kviz,
            odgovorite na pitanja u zadanom vremenu i osvojite što više tačnih
            odgovora. Na kraju, možete provjeriti svoj rezultat i uporediti se
            sa najboljima na leaderboardu. Brzo, zabavno i edukativno!
          </p>
        </div>
        <div>
          <Button
            buttonText="Započni kviz"
            onClick={openPopup}
            className="bg-[#2559D2] border-[#2559D2] border-[1px] font-bold text-xl tracking-wide text-white rounded-[5px] px-20 py-3 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex w-[calc(100vw-12.5rem)] mx-auto gap-10 mt-10 pb-24">
        <Link to="/login" className="aspect-[77/104] w-1/3">
          <Card
            title="Prijavi se"
            desc="Registruj se na Quiz BiH!"
            image={Image1}
          />
        </Link>
        <div className="aspect-[77/104] w-1/3">
          <Card
            title="Uradi Kviz"
            desc="Odgovori na sva pitanja koja imamo!"
            image={Image2}
            onClick={openPopup}
          />
        </div>
        <Link to="/leaderboard" className="aspect-[77/104] w-1/3">
          <Card
            title="Budi #1"
            desc="Osvoji ljestvicu i budi prvi!"
            image={Image3}
          />
        </Link>
      </div>
    </>
  );
};

export default Guides;
