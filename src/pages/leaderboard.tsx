import ScoreCard from "../components/scoreCard";
import Button from "../components/button";
import backgroundImage from "../assets/blue-bg.png";
import QuizPopup from "../components/quizStartPopup";
import usePopup from "../hooks/togglePopup";
// import { useSortUsers, useUserPlacement } from "../hooks/getTopScores";

const Leaderboard: React.FC = () => {
  // const topScores = useSortUsers(fetchedUsers)
  const { openPopup } = usePopup();
  const tempTopScores = [
    {
      name: "Jasmin Fajkic",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 150,
      placement: 1,
    },
    {
      name: "Jasmin Fajkic 1",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 140,
      placement: 2,
    },
    {
      name: "Jasmin Fajkic 2",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 130,
      placement: 3,
    },
    {
      name: "Jasmin Fajkic 3",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 120,
      placement: 4,
    },
    {
      name: "Jasmin Fajkic 4",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 100,
      placement: 5,
    },
    {
      name: "Jasmin Fajkic 4",
      image:
        "https://img.freepik.com/free-photo/happy-business-man-point-you-want-you-half-length-closeup-portrait-blue_155003-15950.jpg?t=st=1738571370~exp=1738574970~hmac=f9b8fa3fd6b6a4a83817b27613d3f471d6b395ca3cd4c3cb9cee137aa5f379bd&w=2000",
      score: 100,
      placement: 5,
    },
  ].slice(0, 5);
  return (
    <div className="w-screen flex flex-col items-center">
      <QuizPopup />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="w-[70%] aspect-[60/43] py-6 pt-20 overflow-hidden"
      >
        <h2 className="text-[2.5rem] text-center text-white font-bold tracking-wider">
          Takmičite se i osvajajte vrh!
        </h2>
        <p className="text-white text-center opacity-60 mb-2 w-[55%] mx-auto">
          Izazovite svoje prijatelje i igrače širom sveta. Pokažite da ste
          najbolji i zauzmite svoje mjesto na leaderboardu!
        </p>
        <Button
          onClick={openPopup}
          className="bg-white text-[#2559D2] text-[1.25rem] font-bold rounded-[5px] py-3 px-20 cursor-pointer relative left-[50%] translate-x-[-50%] my-3 mt-8"
        >Započni kviz</Button>
        <div className="flex flex-col items-center justify-center gap-3 mt-14">
          {tempTopScores.map((user) => (
            <ScoreCard
              key={user.name}
              placement={user.placement}
              name={user.name}
              image={user.image}
              points={user.score}
            />
          ))}
          <ScoreCard
            placement={1}
            image={tempTopScores[0].image}
            name="Jasmin Fajkic"
            points={150}
            className="my-10 shadow-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
