import Button from "../components/button";
import bgImage from "../assets/home-bg.png";
import { QuizPopup } from "../components/popup";
import usePopup from "../hooks/togglePopup";

const Home: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <div className="md:m-12 m-0 overflow-x-hidden w-screen flex flex-col md:flex-row items-start">
      <div className="md:ml-24 md:block flex flex-col w-screen items-center md:w-auto z-12">
        <h1 className="text-black text-[28px] sm:text-[42px] md:text-[4rem] text-center md:text-start font-bold sm:w-[calc(75vw-5rem)] xl:w-[calc(40vw-7.5rem)] w-[calc(100vw-2.5rem)]">
          Pokažite svoje znanje o{" "}
          <span className="text-[#2559D2]">Bosni i Hercegovini</span>
        </h1>
        <p className="text-black opacity-60 text-[12px] sm:text-[16px] md:text-xl text-center md:text-start tracking-wide my-6 sm:w-[calc(75vw-5rem)] xl:w-[calc(40vw-7.5rem)] w-[calc(100vw-2.5rem)]">
          Testirajte svoje znanje o historiji, kulturi i znamenitostima naše
          predivne domovine! Koliko dobro poznajete Bosnu i Hercegovinu?
        </p>
        <Button
          onClick={openPopup}
          className="bg-[#2559D2] border-[#2559D2] border-[1px] font-medium sm:text-lg md:font-bold md:text-xl tracking-wide text-white rounded-[5px] md:rounded-[10px] px-20 md:px-30 py-2.5 sm:py-4 md:py-5 mt-6 cursor-pointer inline-block w-max flex-none"
        >
          Započni kviz
        </Button>
      </div>

      <img
        src={bgImage}
        alt="Background"
        className="absolute bottom-0 z-11 sm:h-[calc(90vh-4.75rem)] md:h-[calc(100vh-4.75rem)] md:right-0 object-cover md:translate-y-[20vh]"
      />

      <QuizPopup />
    </div>
  );
};

export default Home;
