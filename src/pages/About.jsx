import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center  text-white">
        <div className="flex p-4 mt-20 border justify-evenly rounded-lg">
          <div className="flex flex-col w-[50%] p-4">
            This Search Engine is designed for <span className="text-red-800 text-lg">Information Retrival Assignment</span> 
            It implements the basic ideas
            <ul className="list-disc">
              <li>Tokenization</li>
              <li>Stop Word Removal</li>
              <li>Inverted Index</li>
              <li>Similiraity Score</li>
              <li>Ranking documents baased on their Score</li>
            </ul>
          </div>

          <div className="flex flex-col p-4">
            <h1 className="text-xl mb-4">Group-Members</h1>
            <ul className="list-decimal">
              <li className="flex mb-4 bg-gray-800 px-3 py-3 rounded-lg">
                <p className="mr-8 font-bold">1.Abel Sisay</p>
                <p>Ugr/23466/13</p>
              </li>
              <li className="flex mb-4 bg-gray-800 px-3 py-3 rounded-lg">
                <p className="mr-8">2.Imammudin Jhoar</p>
                <p>Ugr/22666/13</p>
              </li>
              <li className="flex mb-4 bg-gray-800 px-3 py-3 rounded-lg">
                <p className="mr-8 font-bold">3.Milkiyas Teferi</p>
                <p>Ugr//13</p>
              </li>
              <li className="flex mb-4 bg-gray-800 px-3 py-3 rounded-lg">
                <p className="mr-8 font-bold">4.Biniam Abebe</p>
                <p>Ugr/22819/13</p>
              </li>
            </ul>
          </div> 
        </div>
      </div>
      <p className="text-center text-white mt-6">SearchRound2023 @Astu</p>
    </div>
  );
};

export default About;
