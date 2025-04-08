interface scoreCardProps {
  placement: number;
  name: string;
  points: number;
  className?: string;
}

const ScoreCard: React.FC<scoreCardProps> = ({
  placement,
  name,
  points,
  className,
}) => {
  return (
    <div
      className={`${className} flex items-center justify-between p-3 rounded-lg shadow-[0px_0px_25px_5px_rgba(0,_0,_0,_0.1)] w-1/2 bg-white`}
    >
      <div className="flex items-center">
        <span className="text-black font-bold ml-2.5 box-border">
          #{placement}
        </span>
        <p className="ml-4">{name}</p>
      </div>
      <p className="text-right mr-2.5 tracking-wider">{points} Bodova</p>
    </div>
  );
};

export default ScoreCard;
