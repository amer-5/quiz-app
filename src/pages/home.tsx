import Button from "../components/button";
import bgImage from "../assets/home-bg.png";
import QuizPopup from "../components/quizPopup";
import usePopup from "../hooks/tooglePopup";

const odigranihKvizova = 0;

const Home: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-screen bg-contain bg-no-repeat [background-position-x:20vw] mx-30 h-[calc(100vh-4.75rem)]"
    >
      <QuizPopup />
      <div>
        <h1 className="text-black text-[4rem] font-bold w-[calc(50vw-12.5rem)] pt-[7.5vh]">
          Pokažite svoje znanje o{" "}
          <span className="text-[#2559D2]">Bosni i Hercegovini</span>
        </h1>
        <p className="text-black opacity-60 text-xl tracking-wide my-6 w-[calc(50vw-12.5rem)]">
          Testirajte svoje znanje o historiji, kulturi i znamenitostima naše
          predivne domovine! Koliko dobro poznajete Bosnu i Hercegovinu?
        </p>
        <Button
          buttonText="Započni kviz"
          onClick={openPopup}
          className="bg-[#2559D2] border-[#2559D2] border-[1px] font-bold text-xl tracking-wide text-white rounded-[10px] px-30 py-5 mt-6 cursor-pointer"
        />
        <p className="opacity-60 mt-4 ml-29">
          {odigranihKvizova} odigranih kvizova
        </p>
      </div>
    </div>
  );
};

export default Home;
