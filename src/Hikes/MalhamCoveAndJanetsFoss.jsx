import React from "react";
import { MapPin, Clock, Mountain } from "lucide-react";
import heroImage from "../../src/assets/DayHikes/hero.jpg";
import Navbar from "../Components/NavBar/Navbar";
import lengthIcon from "../../src/assets/DayHikes/lengthIcon.png";
import timeIcon from "../../src/assets/DayHikes/timeIcon.png";
import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.png";

export default function YorkshireThreePeaks() {
    return (
        <section className="">
            {/* Navbar + Hero Section */}
            <Navbar />
           <div
  className="relative h-[400px] sm:h-[500px] md:h-[580px] bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(76.04deg, rgba(0, 0, 0, 0.4) 0.56%, rgba(102, 102, 102, 0) 43.21%), url(${heroImage})`,
  }}
>

                <div className="absolute inset-0 flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">

                    {/* Block 1: Title + Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
Malham Cove and Janet’s Foss
                        </h1>

                        <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
                           Discover the magic of Malham Cove and Janet’s Foss — a gentle 4.5-mile walk through meadows, waterfalls, and timeless Yorkshire beauty.
                        </p>
                    </div>

                    {/* Block 2: Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Length:</span> 4.5 miles
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Duration:</span> 3 hours
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={difficultyIcon} alt="Difficulty" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Difficulty:</span> Easy
                            </span>
                        </div>
                    </div>

                    {/* Block 3: Price & Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <p className="text-white font-semibold text-[16px] sm:text-[18px]">
                            From £25 per person
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
                          Explore the dramatic limestone landscapes of Malham Cove and the enchanting Janet’s Foss on this gentle 4.5-mile circular walk.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-start p-0 md:p-6">
                        <p className="font-nunito font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
                           Perfect for families, casual walkers, or anyone seeking a shorter adventure, the trail winds through lush meadows, limestone pavements, and scenic valleys. Climb to the top of Malham Cove for panoramic views of the Dales and descend to the tranquil waterfall at Janet’s Foss, said to be linked to local folklore.
                        </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
                    <div className="flex-1 flex items-center justify-center md:justify-start">
                        <p className="font-nunito  font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
                            Along the way, discover fascinating geology, spot wildflowers and local wildlife, and enjoy the peaceful ambiance of this quintessential Yorkshire location. The walk offers an easy pace, making it ideal for photography, picnics, or simply soaking in the natural beauty. A knowledgeable guide can enhance the experience by sharing stories of the area’s myths, history, and geological wonders.



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
