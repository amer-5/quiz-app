import ScoreCard from "../components/scoreCard";
import Button from "../components/button";
import backgroundImage from "../assets/blue-bg.png";
import QuizPopup from "../components/quizStartPopup";
import usePopup from "../hooks/togglePopup";

import { useState, useEffect } from "react";
import fetchData from "../hooks/fetchData";

interface UserDisplayProps {
  _id: string;
  username: string;
  bestScore: number;
}

const Leaderboard: React.FC = () => {
  const { openPopup } = usePopup();
  const [leaderboard, setLeaderboard] = useState<UserDisplayProps[]>([]);
  const [user, setUser] = useState<UserDisplayProps | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const users = await fetchData({
        url: "http://localhost:3000/leaderboard",
      });
      setLeaderboard(users.splice(0, 5));
      const user = await fetchData({
        url: "http://localhost:3000/auth/profile",
      });
      console.log(user);
      setUser(user);
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center">
      <QuizPopup />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="w-[calc(100vw+12rem)] min-h-screen md:min-h-auto md:w-[80%] md:aspect-[60/43] py-6 pt-22 px-12 md:px-auto overflow-x-hidden hide-scrollbar"
      >
        <h2 className="text-[20px] md:text-[2.5rem] text-center text-white font-bold tracking-wider">
          Takmičite se i osvajajte vrh!
        </h2>
        <p className="text-[12px] md:text-[1rem] text-white text-center opacity-60 mb-2 w-[55%] mx-auto">
          Izazovite svoje prijatelje i igrače širom sveta. Pokažite da ste
          najbolji i zauzmite svoje mjesto na leaderboardu!
        </p>
        <Button
          onClick={openPopup}
          className="bg-white text-[#2559D2] text-[1rem] md:text-[1.25rem] font-bold rounded-[5px] py-3 px-16 md:px-20 cursor-pointer relative left-[50%] translate-x-[-50%] my-3 mt-8"
        >
          Započni kviz
        </Button>
        <div className="flex flex-col items-center justify-center gap-3 mt-14">
          {leaderboard.map((user, index) => (
            <ScoreCard
              key={user._id}
              placement={index + 1}
              name={user.username}
              points={user.bestScore}
            />
          ))}
          {user && (
            <ScoreCard
              placement={0}
              name={user.username}
              points={user.bestScore}
              className="my-10 shadow-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
