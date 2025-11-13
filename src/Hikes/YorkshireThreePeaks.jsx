import React from "react";
import { MapPin, Clock, Mountain } from "lucide-react";
import heroImage from "../../src/assets/DayHikes/hero.jpg";
import Navbar from "../Components/NavBar/Navbar";
import lengthIcon from "../../src/assets/DayHikes/lengthIcon.png";
import timeIcon from "../../src/assets/DayHikes/timeIcon.png";
import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.png";

export default function YorkshireThreePeaks() {
  return (
    <section className="font-['Nunito_Sans'] text-gray-800">
      {/* Navbar + Hero Section */}
      <Navbar />
      <div
      className="relative h-[400px] sm:h-[500px] md:h-[580px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(76.04deg, rgba(0, 0, 0, 0.4) 0.56%, rgba(102, 102, 102, 0) 43.21%), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0  flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">

          {/* Block 1: Title + Description */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
              Yorkshire 3 Peaks
            </h1>

            <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
              Conquer Yorkshire’s iconic 3 Peaks — a 25-mile adventure of rugged
              beauty, endurance, and breathtaking Dales landscapes.
            </p>
          </div>

          {/* Block 2: Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Length:</span> 25 miles
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Duration:</span> 12 hours
              </span>
            </div>

            <div className="flex items-center gap-2">
              <img src={difficultyIcon} alt="Difficulty" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                <span className="font-semibold">Difficulty:</span> Hard
              </span>
            </div>
          </div>

          {/* Block 3: Price & Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-white font-semibold text-[16px] sm:text-[18px]">
              From £50 per person
            </p>
            <button className="bg-[#C56441] font-nunito hover:bg-[#a85632] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
              Book Now
            </button>
          </div>

        </div>

      </div>



      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-10 md:px-16">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-5">
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <p className="font-nunito font-semibold  text-[16px] md:text-[18px] leading-[30px] text-[#C56441] tracking-[0] max-w-[400px] text-center md:text-left">
              The legendary Yorkshire 3 Peaks challenge takes you through the stunning
              landscapes of <span>Pen-y-ghent</span>, <span>Whernside</span>, and <span>Ingleborough</span>.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-start p-0 md:p-6">
            <p className="font-nunito font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
              This 25-mile trek is not for the faint-hearted — it’s a full-day adventure
              with steep ascents, rugged terrain, and breathtaking views across the Dales.
              Hikers will navigate limestone pavements, rolling valleys, and dramatic
              ridges, all while testing their endurance and stamina. Along the way, enjoy
              iconic landmarks such as the Ribblehead Viaduct and traditional Dales villages.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <p className="font-nunito  font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
              Perfect for experienced walkers seeking a true challenge, the route
              combines natural beauty with the satisfaction of completing one of
              the UK’s most famous walking circuits. Guided groups ensure safety
              and pace while sharing insights into the local history, geology, and
              wildlife. This is more than a hike — it’s a full immersion in the
              heart of the Yorkshire Dales.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-start">
            <iframe
              title="Yorkshire 3 Peaks Map"
              src="https://www.google.com/maps?q=Yorkshire+3+Peaks&output=embed"
              className="w-full max-w-[500px] h-[250px] md:h-[300px] rounded-[20px] border-0 shadow-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
