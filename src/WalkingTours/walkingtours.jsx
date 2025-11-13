import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

import dayHike1 from "../../src/assets/DayHikes/dayhike1.jpg";
import dayHike2 from "../../src/assets/DayHikes/dayhike2.jpg";
import multidayhike from "../../src/assets/DayHikes/multidayhike1.jpg";
import heroImage from "../../src/assets/DayHikes/dayhike1.jpg";
import walkingtours from "../../src/assets/DayHikes/walkingtours.jpg";
import lengthIcon from "../../src/assets/DayHikes/lengthIcon.png";
import timeIcon from "../../src/assets/DayHikes/timeIcon.png";
import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.png";

export default function HikesPage() {
  const navigate = useNavigate();

  // Combine all hikes into one list
  const allHikes = [
    {
      title: "Ilkley",
      desc: "From Victorian industry to windswept moorland and Darwin’s Yorkshire retreat",
      time: "Time-2 hours",
      tagline: "Industrial Ilkley • Ilkley Moor • Charles Darwin", // 👈 added
      cost: "From £20 per person",
      img: dayHike2,
    },
    {
      title: "Skipton",
      desc: "Explore canals, castle walls, and the charm of Skipton’s historic market town.",
      time: "Time-3 hours",
      tagline: "The canal• Skipton castle • The market", // 👈 added
      cost: "From £20 per person",
      img: walkingtours,
    },
    {
      title: "Bolton Abbey",
      desc: "Walk among ancient ruins, riverside paths, and the dramatic Strid gorge.",
      time: "Time-2 hours",
      tagline: "The abbey• The strid • Valley of Desolation", // 👈 added
      cost: "From £20 per person",
      img: dayHike1,
    },
    {
      title: "Grassington",
      desc: "Step into Dales heritage, mining, farming, and timeless village life",
      time: "Time-2 hours",
      tagline: "Mining history• Farming", // 👈 added
      cost: "From £20 per person",
      img: walkingtours,
    },
    {
      title: "Malham",
      desc: "Discover limestone cliffs, hidden waterfalls, and the geology that shaped the Dales.",
      time: "Time-3 hours",
      tagline: "Malham cove• Geology of Malham", // 👈 added
      cost: "From £20 per person",
      img: dayHike1,
    },
    {
      title: "Whitby",
      desc: "Seaside legends, abbey ruins, and tales of sailors and storytellers",
      cost: "From £20 per person",
      img: dayHike2,
    },
    {
      title: "Hawes",
      desc: "Dales stone villages, Wensleydale cheese, and wild moorland scenery.",
      cost: "From £20 per person",
      img: dayHike2,
    },
    {
      title: "Haworth",
      desc: "Follow in the footsteps of the Brontës through cobbled streets and moors.",
      cost: "From £20 per person",
      img:walkingtours,
    },
    {
      title: "Ripon",
      desc: "Cathedral spires, market squares, and riverside trails through England’s smallest city.",
      cost: "From £20 per person",
      img: walkingtours,
    },
  ];


  return (
    <div className="font-nunito bg-[#fff]">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(76.04deg, rgba(0,0,0,0.4) 0.56%, rgba(102,102,102,0) 43.21%), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-['Raleway'] font-medium text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[36px] sm:leading-[50px] md:leading-[64px] lg:leading-[72px]">
            Explore and Learn on Foot          </h1>
          <p className="font-['Nunito_Sans'] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] mt-3 max-w-[700px]">
            Each tour combines outdoor adventure with insight, from map reading and local ecology to Yorkshire’s cultural heritage.          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 px-4 max-w-3xl mx-auto">
        <h2 className="font-raleway font-bold text-[30px] leading-[48px] text-center text-[#C56441] mb-2">
          Walking Tours
        </h2>
        <p className="font-nunito font-normal text-[20px] leading-[36px] text-gray-700 text-center">
          Small group tours that bring together history, nature, and a good pair of boots
        </p>
      </div>

      {/* Hike Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-10 px-4 max-w-[900px] mx-auto mb-16">
        {allHikes.map((hike, index) => (
          <div
            key={index}
            onClick={() => navigate(hike.link)}
            className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer w-full sm:max-w-[380px] mx-auto"
          >
            {/* Image */}
            <div className="h-[220px] overflow-hidden rounded-3xl mx-3 mt-3">
              <img
                src={hike.img}
                alt={hike.title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-[#926A39] text-center font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] tracking-[0] mb-1">
                  {hike.title}
                </h3>

                <p className="text-gray-700 text-center font-['Nunito_Sans'] font-medium text-[16px] leading-[25px] tracking-[0] mb-3">
                  {hike.desc}
                </p>

                {/* Stats Section */}
                <div className="flex justify-between text-gray-700 text-xs sm:text-sm">


                  {/* Stats Section */}
                {/* Stats Section */}
<div className="flex flex-col items-center mt-2 w-full">
  {(hike.time || hike.tagline) && (
    <>
      {/* Time */}
      {hike.time && (
        <div className="flex items-center gap-2">
          <img src={timeIcon} alt="Time" className="w-4 h-4" />
          <span className="font-['Nunito_Sans'] font-medium text-[16px] leading-[20px] text-[#2B2B2B] tracking-[0]">
            {hike.time}
          </span>
        </div>
      )}

      {/* Tagline below time */}
      {hike.tagline && (
        <p className="text-center font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#434343] mt-1">
          {hike.tagline}
        </p>
      )}
    </>
  )}
</div>









                </div>
              </div>

              {/* Cost + Button */}
              <div className="flex justify-between items-center mt-4">
                <p className="font-['Nunito_Sans'] font-bold text-[16px] leading-[27px] tracking-[0] text-[#167800]">
                  {hike.cost}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(hike.link);
                  }}
                  className="bg-[#C56441] hover:bg-[#a85632] text-white font-semibold py-1.5 px-4 rounded-md text-sm transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
