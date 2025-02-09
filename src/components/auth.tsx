import useRandomizeBg from "../hooks/randomizeBg";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const LoginPage: React.FC = () => {
  const { bgImage, nextBg, prevBg } = useRandomizeBg();

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-row">
      <div className="relative inline-block h-screen w-full rounded-r-[1rem]">
        <img
          src={bgImage}
          alt="Login Background"
          className="block h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0 flex flex-col-reverse items-bottom h-screen">
          <h2 className="text-white text-[40px] font-bold w-7/10 absolute bottom-40 left-15 overflow-hidden">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <br />
            Najbolji način da naučiš nešto novo jeste da se zabaviš radeći to.
          </h2>
          <div className="flex gap-6 absolute bottom-20 right-15">
            <img src={arrowLeft} alt="" onClick={prevBg}/>
            <img src={arrowRight} alt="" onClick={nextBg}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
