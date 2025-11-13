import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

import dayHike1 from "../../src/assets/DayHikes/dayhike1.jpg";
import dayHike2 from "../../src/assets/DayHikes/dayhike2.jpg";
import multiHike1 from "../../src/assets/DayHikes/dayhike2.jpg"; // replace with actual image
import multiHike2 from "../../src/assets/DayHikes/dayhike2.jpg"; // replace with actual image
import heroImage from "../../src/assets/DayHikes/hero.jpg";
import lengthIcon from "../../src/assets/DayHikes/lengthIcon.png";
import timeIcon from "../../src/assets/DayHikes/timeIcon.png";
import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.png";
import multidayhike from "../../src/assets/DayHikes/multidayhike1.jpg";


export default function HikesPage() {
  const [activeTab, setActiveTab] = useState("day");
  const navigate = useNavigate();

  const dayHikes = [
    {
      title: "Yorkshire 3 Peaks",
      desc: "Take on Yorkshire's ultimate hiking challenge across its three highest summits",
      length: "25 miles",
      time: "12 hours",
      difficulty: "Hard",
      cost: "From £50 per person",
      img: dayHike2,
      link: "/yorkshire-3-peaks",
    },
    {
      title: "Malham Cove and Janet’s Foss",
      desc: "Explore limestone cliffs, woodlands, and one of Yorkshire’s most loved waterfalls",
      length: "4.5 miles",
      time: "3 hours",
      difficulty: "Easy",
      cost: "From £25 per person",
      img: dayHike1,
      link: "/malham-cove-janets-foss",
    },
    {
      title: "Bolton Abbey and Simon’s Seat",
      desc: "Climb from historic abbey ruins to sweeping moorland views above Wharfedale",
      length: "9 miles",
      time: "5 hours",
      difficulty: "Intermediate",
      cost: "From £30 per person",
      img: dayHike1,
      link: "/bolton-abbey",
    },
    {
      title: "Roseberry Topping and Captain Cook’s Monument",
      desc: "Hike to the iconic Roseberry Topping and learn about Captain Cook’s heritage",
      length: "6 miles",
      time: "4 hours",
      difficulty: "Intermediate",
      cost: "From £30 per person",
      img: dayHike2,
      link: "/roseberry-topping-captain-cooks-monument",
    },
    {
      title: "Ilkley Moor and the 12 Apostles",
      desc: "Wander across heather moors and visit the ancient stone circle high above Ilkley",
      length: "5 miles",
      time: "3 hours",
      difficulty: "Intermediate",
      cost: "From £25 per person",
      img: multidayhike,
      link: "/ilkley-moor",
    },
  ];

  const multiDayHikes = [
    {
      title: "Dales Way",
      desc: "Journey through river valleys, villages, and rolling dales on Yorkshire’s most scenic long-distance trail",
      length: "82 miles",
      time: "Time 5-8 days",
      difficulty: "Intermediate",
      cost: "From £950 per person",
      img: multidayhike,
      link: "/daleway",
    },
    {
      title: "Coast to Coast ",
      desc: "Traverse England from sea to sea, a legendary hike across mountains, moors, and countryside.",
      length: "192 miles",
      time: "Time 3-5 days",
      difficulty: "Hard",
      cost: "From £975 per person",
      img: multidayhike,
      link: "/coast-to-coast",
    },
    {
      title: "Cleveland way",
      desc: "A dramatic trail combining coastal cliffs, ancient ruins, and sweeping moorland views.",
      length: "109 miles",
      time: "Time 7-10 days",
      difficulty: "Intermediate",
      cost: "From £950 per person",
      img: multidayhike,
      link: "/cleveland",
    },
   
  ];

  const hikesToDisplay = activeTab === "day" ? dayHikes : multiDayHikes;

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
            Find Your Perfect Hike in Yorkshire
          </h1>
          <p className="font-['Nunito_Sans'] text-white font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[120%] mt-3 max-w-[700px]">
            Plan hikes, explore hidden routes, and travel beyond the ordinary
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 gap-4">
        <button
          className={`px-6 py-2 rounded-md font-semibold transition-all ${
            activeTab === "day" ? "bg-[#C56441] text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("day")}
        >
          Day Hikes
        </button>
        <button
          className={`px-6 py-2 rounded-md font-semibold transition-all ${
            activeTab === "multi" ? "bg-[#C56441] text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("multi")}
        >
          Multi Day Hikes
        </button>
      </div>

      {/* Section Title */}
      <div className="text-center mt-10 px-4 max-w-3xl mx-auto">
        <h2 className="font-raleway font-bold text-[30px] leading-[48px] text-center text-[#C56441] mb-2">
          {activeTab === "day" ? "Day Hikes" : "Multi-Day Hikes"}
        </h2>
        <p className="font-nunito font-normal text-[20px] leading-[36px] text-gray-700 text-center">
          {activeTab === "day"
            ? "Spend a few unforgettable hours exploring Yorkshire's finest trails. Perfect for spontaneous adventures, our guided day hikes combine local insight, scenic views, and just the right level of challenge."
            : "Immerse yourself in Yorkshire’s landscapes over several days. These guided journeys include overnight stays, meal arrangements, and full support, ideal for those who want the complete outdoor experience."}
        </p>
      </div>

      {/* Hike Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-10 px-4 max-w-[900px] mx-auto mb-16">
        {hikesToDisplay.map((hike, index) => (
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
                  <div className="flex flex-col items-center">
                    <img src={lengthIcon} alt="Length" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Length</span>
                    <span className="font-bold">{hike.length}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={timeIcon} alt="Time" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Time</span>
                    <span className="font-bold">{hike.time}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src={difficultyIcon} alt="Difficulty" className="w-5 h-5 mb-1" />
                    <span className="font-['Nunito_Sans'] font-semibold text-[12px] text-gray-600">Difficulty</span>
                    <span className="font-bold">{hike.difficulty}</span>
                  </div>
                </div>
              </div>

              {/* Cost + Button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-green-700 font-['Nunito_Sans'] font-bold text-[16px] leading-[27px] tracking-[0]">{hike.cost}</p>
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
