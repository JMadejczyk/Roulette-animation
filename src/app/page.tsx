"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const teams: string[] = [
    "ZSK",
    "ZSŁ",
    "Marynka",
    "17lo",
    "15lo",
    "3lo",
    "8lo",
    "11lo",
  ];
  const teams_colors: any = {
    ZSK: "bg-red-500",
    ZSŁ: "bg-blue-500",
    Marynka: "bg-green-500",
    "17lo": "bg-yellow-500",
    "15lo": "bg-purple-500",
    "3lo": "bg-pink-500",
    "8lo": "bg-indigo-500",
    "11lo": "bg-gray-500",
  };

  const [teamsRandom, setTeamsRandom] = useState<string[][]>([[], [], [], []]);

  const AreDifferent = (arr: string[][]): boolean => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i][2] === arr[j][2]) {
          return false;
        }
      }
    }
    return true;
  };
  useEffect(() => {
    let teamsRandomCopy = teamsRandom.concat();

    while (!AreDifferent(teamsRandomCopy)) {
      teamsRandomCopy = [[], [], [], []];
      let k = 25;

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < k; j++) {
          teamsRandomCopy[i] = [...teamsRandomCopy[i], teams[j % teams.length]];
        }
        teamsRandomCopy[i].sort(() => Math.random() - 0.5);

        k += 5;
      }
    }
    setTeamsRandom(teamsRandomCopy);
  }, []);

  console.log(teamsRandom);

  if (teamsRandom[0].length === 0) {
    return (
      <motion.div className="bg-slate-500 w-screen h-screen flex justify-center items-center">
        Loading...
      </motion.div>
    );
  } else if (teams && teams_colors) {
    return (
      <div className="bg-gradient-to-b from-blue-500 to-purple-500 w-screen h-screen flex justify-center items-center">
        <div className="w-[60vw] h-[60vh] bg-slate-400 rounded-2xl flex justify-center gap-10 overflow-hidden relative pr-10 pl-10">
          <div className="bg-gradient-to-b from-slate-600 to-transparent z-20 absolute top-0 h-[20vh] w-full"></div>
          <div className="bg-gradient-to-b from-slate-600 to-transparent z-20 absolute top-0 h-[20vh] w-full"></div>
          <div className="bg-gradient-to-b from-slate-600 to-transparent z-20 absolute top-0 h-[20vh] w-full"></div>
          <div className="bg-gradient-to-t from-slate-600 to-transparent z-20 absolute bottom-0 h-[20vh] w-full"></div>
          <div className="bg-gradient-to-t from-slate-600 to-transparent z-20 absolute bottom-0 h-[20vh] w-full"></div>
          <div className="bg-gradient-to-t from-slate-600 to-transparent z-20 absolute bottom-0 h-[20vh] w-full"></div>

          <motion.div
            className={`w-36 bg-black flex flex-col items-center`}
            initial={{ y: -100 * teamsRandom[0].length }}
            animate={{ y: -61 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 0.5,
              bounce: 0.2,
              ease: "easeInOut",
            }}
          >
            {teamsRandom[0].map((team, index) => (
              <div
                key={index}
                className={`w-full text-white pt-14 pb-14 border text-center ${teams_colors[team]}`}
              >
                {team}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="w-36 bg-black flex flex-col items-center"
            initial={{ y: -100 * teamsRandom[1].length }}
            animate={{ y: -61 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 1,
              bounce: 0.2,
              ease: "easeInOut",
            }}
          >
            {teamsRandom[1].map((team, index) => (
              <div
                key={index}
                className={`w-full text-white pt-14 pb-14 border text-center ${teams_colors[team]}`}
              >
                {team}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="w-36 bg-black flex flex-col items-center"
            initial={{ y: -100 * teamsRandom[2].length }}
            animate={{ y: -61 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 1.5,
              bounce: 0.2,
              ease: "easeInOut",
            }}
          >
            {teamsRandom[2].map((team, index) => (
              <div
                key={index}
                className={`w-full text-white pt-14 pb-14 border text-center ${teams_colors[team]}`}
              >
                {team}
              </div>
            ))}
          </motion.div>
          <motion.div
            className="w-36 bg-black flex flex-col items-center"
            initial={{ y: -100 * teamsRandom[3].length }}
            animate={{ y: -61 }}
            transition={{
              duration: 4,
              type: "spring",
              delay: 2,
              bounce: 0.2,
              ease: "easeInOut",
            }}
          >
            {teamsRandom[3].map((team, index) => (
              <div
                key={index}
                className={`w-full text-white pt-14 pb-14 border text-center ${teams_colors[team]} `}
              >
                {team}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
}
