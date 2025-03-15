import Button from "../components/button";
import bgImage from "../assets/home-bg.png";
import QuizPopup from "../components/quizStartPopup";
import usePopup from "../hooks/togglePopup";

const odigranihKvizova = 0;

const Home: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <div className="overflow-x-hidden w-screen h-[calc(100vh-4.75rem)] flex sm:flex-row flex-col items-start">
      {/* Tekstualni sadržaj na lijevoj strani */}
      <div className="ml-24">
        <h1 className="text-black text-[4rem] font-bold w-[calc(50vw-12.5rem)]">
          Pokažite svoje znanje o
          <span className="text-[#2559D2]"> Bosni i Hercegovini</span>
        </h1>
        <p className="text-black opacity-60 text-xl tracking-wide my-6 w-[calc(50vw-12.5rem)]">
          Testirajte svoje znanje o historiji, kulturi i znamenitostima naše
          predivne domovine! Koliko dobro poznajete Bosnu i Hercegovinu?
        </p>
        <Button
          onClick={openPopup}
          className="bg-[#2559D2] border-[#2559D2] border-[1px] font-bold text-xl tracking-wide text-white rounded-[10px] px-30 py-5 mt-6 cursor-pointer inline-block"
        >Započni kviz</Button>
        <p className="opacity-60 mt-4 ml-29">
          {odigranihKvizova} odigranih kvizova
        </p>
      </div>

      {/* Slika na desnoj strani */}
      <div className="flex-1 flex justify-start">
        <img
          src={bgImage}
          alt="Background"
          className="h-[calc(100vh-4.75rem)] w-auto object-cover"
        />
      </div>

      {/* Popup za kviz */}
      <QuizPopup />
    </div>
  );
};

export default Home;
