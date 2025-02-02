import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/arrow.svg";

interface CardProps {
  title: string;
  desc: string;
  image: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, desc, image, url }) => {
  return (
    <Link
      to={url}
      className="card relative bg-cover bg-center aspect-[77/104] w-1/3 rounded-[10px] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/75 before:to-transparent before:rounded-inherit"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10 m-10">
        <h2 className="text-2xl font-semibold text-white tracking-wider">
          {title}
        </h2>
        <p className="text-white text-[14px]">{desc}</p>
      </div>
      <div className="absolute z-10 py-4 right-10 top-10">
        <img src={arrowIcon} alt="Arrow" />
      </div>
    </Link>
  );
};

export default Card;
