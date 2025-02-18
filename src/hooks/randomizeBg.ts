import { useState } from "react";
import bg1 from "../assets/random-bgs/1.png";
import bg2 from "../assets/random-bgs/2.png";

const bgImages = [bg1, bg2];

const useRandomizeBg = (initial: string | null = null) => {
  const initialBg =
    initial && bgImages.includes(initial) ? initial : bgImages[0];
  const [randomBg, setRandomBg] = useState(initialBg);

  const currentIndex = bgImages.findIndex((bg) => bg === randomBg);

  const prevBg = () => {
    const newIndex =
      currentIndex - 1 >= 0 ? currentIndex - 1 : bgImages.length - 1;
    setRandomBg(bgImages[newIndex]);
  };

  const nextBg = () => {
    const newIndex = currentIndex + 1 < bgImages.length ? currentIndex + 1 : 0;
    setRandomBg(bgImages[newIndex]);
  };

  return { bgImage: randomBg, nextBg, prevBg };
};

export default useRandomizeBg;
