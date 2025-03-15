interface scoreCardProps {
  placement: number;
  image: string;
  name: string;
  points: number;
  className?: string;
}

const ScoreCard: React.FC<scoreCardProps> = ({
  placement,
  image,
  name,
  points,
  className,
}) => {
  return (
    <div
      className={`${className} flex items-center justify-between p-3 rounded-lg shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1)] md:w-1/2 w-6/10 bg-white`}
    >
      <div className="flex items-center">
        <span className="text-black font-bold ml-2.5 box-border  text-[12px] md:text-[1rem]">
          #{placement}
        </span>
        <img
          className="w-6 h-6 md:w-8 md:h-8 ml-4 rounded-full"
          src={image}
          alt="Profile"
        />
        <p className="ml-4 text-[12px] md:text-[1rem]">{name}</p>
      </div>
      <p className="text-right mr-2.5 tracking-wider  text-[12px] md:text-[1rem]">
        {points} Bodova
      </p>
    </div>
  );
};

export default ScoreCard;
