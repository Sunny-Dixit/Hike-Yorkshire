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

                <div className="absolute inset-0  flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">

                    {/* Block 1: Title + Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
                            Bolton Abbey and Simon’s Seat

                        </h1>

                        <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
Discover the magic of Malham Cove and Janet’s Foss — a gentle 4.5-mile walk through meadows, waterfalls, and timeless Yorkshire beauty.                        </p>
                    </div>

                    {/* Block 2: Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Length:</span> 9 miles
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Duration:</span> 5 hours
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={difficultyIcon} alt="Difficulty" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Difficulty:</span> Intermediate
                            </span>
                        </div>
                    </div>

                    {/* Block 3: Price & Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <p className="text-white font-semibold text-[16px] sm:text-[18px]">
                            From £30 per person
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
Experience the beauty of Bolton Abbey and Simon’s Seat — a rewarding hike of rivers, woods, and panoramic Yorkshire views.                        </p>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-start p-0 md:p-6">
                        <p className="font-nunito font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
his Bolton Abbey and Simon’s Seat hike combines riverside paths, woodland trails, and hilltop vistas for a memorable Yorkshire day out. Starting from the historic Bolton Abbey estate, the route follows the winding River Wharfe, passing charming bridges and waterfalls before ascending to Simon’s Seat, a dramatic gritstone outcrop offering sweeping views of Wharfedale.                         </p>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
                    <div className="flex-1 flex items-center justify-center md:justify-start">
                        <p className="font-nunito  font-normal text-[14px] md:text-[16px] leading-[30px] text-[#434343] tracking-[0] max-w-[500px] text-center md:text-left">
The trail is moderately challenging, with a mix of gentle valleys and steeper climbs, making it ideal for walkers with some experience. Along the way, explore ancient ruins, spot diverse wildlife, and enjoy the tranquility of the Dales’ countryside. Guides provide insights into the history of the abbey, local legends, and natural features, turning the walk into both an adventure and an educational experience. With picturesque scenery at every turn, this intermediate hike balances effort with reward perfectly.






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
