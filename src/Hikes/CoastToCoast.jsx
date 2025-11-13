import { React, useState } from "react";
import heroImg from "../../src/assets/DayHikes/dalesway-hero.jpg";
import backgroundImage from "../../src/assets/DayHikes/daleway-photo1.jpg";
import coastIllustration from "../../src/assets/DayHikes/coastIllustration.png";
import pics1 from "../../src/assets/DayHikes/pic1.png";
import pics2 from "../../src/assets/DayHikes/pic2.png";


import Navbar from "../Components/NavBar/Navbar";
import lengthIcon from "../../src/assets/DayHikes/lengthIcon.png";
import timeIcon from "../../src/assets/DayHikes/timeIcon.png";
import difficultyIcon from "../../src/assets/DayHikes/difficultyIcon.png";
import checkIcon from "../../src/assets/DayHikes/checkIcon.png";
import icon1 from "../../src/assets/DayHikes/icon1.png";
import icon2 from "../../src/assets/DayHikes/icon2.png";
import icon3 from "../../src/assets/DayHikes/icon3.png";
import icon4 from "../../src/assets/DayHikes/icon4.png";






export default function DalesWay() {
    const [activeDay, setActiveDay] = useState(1);



    const routeContent = {
        1: [
            `Begin with a ceremonial dip of your boots in the Irish Sea at  <span class="font-medium text-[#C56441]">St Bees Head</span>.`,
            `Climb over <span class="font-medium text-[#C56441]">Dent Fell</span> and traverse the fells past <span class="font-medium text-[#C56441]">Ennerdale Water</span> and <span class="font-medium text-[#C56441]">Haystacks</span>, beloved by Wainwright.`,
            `Visit <span class="font-medium text-[#C56441]">Grasmere</span> and <span class="font-medium text-[#C56441]">Wordsworth’s Dove Cottage</span>, before crossing <span class="font-medium text-[#C56441]">Helvellyn</span> (optional for advanced walkers).`,
        ],

        2: [
            `Pass through the <span class="font-medium text-[#C56441]">Eden Valley</span>, then enter the Dales at <span class="font-medium text-[#C56441]">Orton Scar</span> and <span class="font-medium text-[#C56441]">Ravenstonedale</span>.`,
            `Enjoy limestone escarpments, dry valleys, and charming inns at <span class="font-medium text-[#C56441]">Keld</span> and <span class="font-medium text-[#C56441]">Muker</span>.`,
            `Visit the Georgian market town of <span class="font-medium text-[#C56441]">Richmond</span>, home to <span class="font-medium text-[#C56441]">Richmond Castle</span> and the <span class="font-medium text-[#C56441]">River Swale waterfalls</span>.`,
        ],

        3: [
            `Climb onto <span class="font-medium text-[#C56441]">Blakey Ridge</span> and enjoy the vast open views of the moors.`,
            `Descend through <span class="font-medium text-[#C56441]">Glaisdale</span>, <span class="font-medium text-[#C56441]">Grosmont</span>, and <span class="font-medium text-[#C56441]">Whitby</span>, with time to explore <span class="font-medium text-[#C56441]">Whitby Abbey</span> and <span class="font-medium text-[#C56441]">Captain Cook’s heritage</span>.`,
            `Finish at <span class="font-medium text-[#C56441]">Robin Hood’s Bay</span>, tossing a pebble from <span class="font-medium text-[#C56441]">St Bees</span> into the sea — as tradition demands.`,
        ],


    };

    return (
        <div className="font-nunito">
            <Navbar />

            {/* HERO SECTION */}
            <section
                className="relative h-[90vh]  bg-cover bg-top flex items-center justify-center"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0  flex flex-col justify-end items-start px-4 sm:px-10 md:px-16 pb-6 md:pb-10 space-y-8 sm:space-y-10">

                    {/* Block 1: Title + Description */}
                    <div className="space-y-1 sm:space-y-2">
                        <h1 className="font-['Raleway'] text-white font-semibold text-[22px] sm:text-[30px] md:text-[42px] leading-tight">
                            Coast to Coast

                        </h1>

                        <p className="text-white text-[12px] sm:text-[14px] md:text-[18px] max-w-full sm:max-w-[650px] leading-[150%]">
                            A journey through Yorkshire’s pastoral heart, from Irish Sea to North Sea </p>
                    </div>

                    {/* Block 2: Stats */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 text-white text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <img src={lengthIcon} alt="Length" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Length:</span> 192 miles
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={timeIcon} alt="Duration" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">
                                <span className="font-semibold">Duration:</span>
                                15 days(3*5 days section)
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
                            From £975 per person per section
                        </p>
                        <button className="bg-[#C56441] font-nunito hover:bg-[#a85632] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                            Book Now
                        </button>
                    </div>

                </div>
            </section>

            {/* INTRO + FEATURES */}
            <section className="py-8 px-6 md:px-20 flex justify-center">
                <div className="max-w-6xl w-full mx-auto">

                    {/* First Section */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-20">
                        <div className="font-nunito">
                            <p className="mb-6 text-[18px] leading-[30px] text-gray-700 font-normal">
                                Discover Yorkshire’s most breathtaking long-distance trails with Hike Yorkshire’s expertly guided
                                multi-day adventures. Our itineraries combine stunning landscapes, fascinating local history,
                                and comfortable accommodation — leaving you free to focus on the journey.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3 font-nunito font-bold text-[18px] leading-[30px] text-[#C56441]">
                                <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                                <span>Qualified mountain leaders and local guides</span>
                            </div>

                            <div className="flex items-start gap-3 font-nunito font-bold text-[18px] leading-[30px] text-[#C56441]">
                                <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                                <span>Daily baggage transfers</span>
                            </div>

                            <div className="flex items-start gap-3 font-nunito font-bold text-[18px] leading-[30px] text-[#C56441]">
                                <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                                <span>Carefully selected accommodation</span>
                            </div>

                            <div className="flex items-start gap-3 font-nunito font-bold text-[18px] leading-[30px] text-[#C56441]">
                                <img src={checkIcon} alt="check icon" className="w-4 h-4 mt-2 flex-shrink-0" />
                                <span>Historical and folklore commentary throughout</span>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-20 mt-8">
                        <div className="flex items-center">
                            <p className="font-nunito font-semibold text-[20px] leading-[30px] tracking-normal text-[#C56441]">
                                Designed by legendary fell-walker Alfred Wainwright, this iconic route crosses England from the Irish Sea to the North Sea.                            </p>
                        </div>

                        <div>
                            <p className="font-nunito font-normal text-[18px] leading-[30px] text-[#434343]">
                                It traverses three national parks — the <span className="font-medium text-[#C56441]">Lake District</span>,
                                <span className="font-medium text-[#C56441]"> Yorkshire Dales</span>, and
                                <span className="font-medium text-[#C56441]"> North York Moors</span>.
                                It’s a pilgrimage through the spine of northern England: rugged peaks, quiet dales, and ancient moorlands —
                                culminating at the clifftops of <span className="font-medium text-[#C56441]">Robin Hood’s Bay</span>.
                            </p>

                        </div>
                    </div>

                </div>
            </section>




            {/* ROUTE HIGHLIGHTS */}
            <section className="py-8 md:py-10 bg-gray-50 px-4 sm:px-6 md:px-20">
                <h2 className="font-nunito font-bold text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] text-[#C56441] mb-4 md:mb-6">
                    Route Highlights
                </h2>

                {/* TAB BUTTONS */}
                <div className="flex flex-wrap gap-1 md:gap-2 w-full pb-3">
                    {[1, 2, 3, 4].map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`flex-1 font-nunito font-bold text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] pb-1 px-1 sm:px-2 whitespace-normal text-center ${activeDay === day
                                ? "text-[#C56441] border-b-2 border-[#C56441]"
                                : "text-[#8E8E8E]"
                                }`}
                        >
                            {day === 1 && "Section 1: St Bees to Shap (The Lake District, 60 miles)"}
                            {day === 2 && "Section 2: Shap to Richmond (The Yorkshire Dales, 80 miles)"}
                            {day === 3 && "Section  3: Richmond to Robin Hood’s Bay (The North York Moors, 52 miles)"}
                        </button>
                    ))}
                </div>



                {/* TAB CONTENT */}
                <ul className="mt-4 md:mt-6 list-disc ml-4 md:ml-6 space-y-2 font-nunito font-medium text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] text-[#6B6B6B]">
                    {routeContent[activeDay].map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </ul>
            </section>



            <section
                className="relative flex flex-col md:flex-row items-stretch overflow-hidden py-0"
                style={{
                    height: "auto",
                    minHeight: "400px",
                }}
            >
                {/* LEFT SIDE - TEXT with gradient background */}
                <div
                    className="relative flex flex-col justify-center w-full md:w-[65%] px-6 md:px-20 bg-[#E6AA7C] overflow-hidden 
                        py-10 md:py-0"
                    style={{
                        height: "auto",
                        minHeight: "400px",
                    }}
                >
                    {/* Gradient (only visible on desktop) */}
                    <div
                        className="absolute inset-0 z-0 hidden md:block"
                        style={{
                            background:
                                "linear-gradient(90deg, #E6AA7C 0%, #E6AA7C 60%, rgba(230,170,124,0.9) 75%, rgba(230,170,124,0.7) 85%, rgba(230,170,124,0.4) 92%, rgba(230,170,124,0) 100%)",
                        }}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h3 className="font-nunito font-bold text-[22px] leading-[32px] text-[#9B3F1E] mb-6">
                            Sights of Interest
                        </h3>

                        <ul className="space-y-2 font-nunito text-[16px] leading-[28px] list-disc pl-6 marker:text-[#C56441]">
                            <li>
                                <span className="font-bold text-[#9B3F1E]">Helvellyn and Grasmere</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– heart of Wordsworth country
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Richmond Castle</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– Norman fortress with sweeping views
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Blakey Ridge</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– moorland plateau with ancient trackways
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Whitby Abbey</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– the Gothic inspiration for Dracula
                                </span>
                            </li>

                            <li>
                                <span className="font-bold text-[#9B3F1E]">Robin Hood’s Bay</span>
                                <span className="text-[#363535] font-semibold">
                                    {" "}– smuggler’s haven and coastal gem
                                </span>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* RIGHT SIDE - IMAGE (hidden on mobile) */}
                <div
                    className="relative hidden md:block w-[35%] h-[400px] overflow-hidden"
                >
                    <img
                        src={coastIllustration}
                        alt="Cleveland coast illustration"
                        className="w-full h-full object-cover object-center"
                    />

                    {/* Blending overlay */}
                    <div
                        className="absolute left-[-80px] top-0 h-full w-[180px] pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to right, rgba(230,170,124,1) 50%, rgba(230,170,124,0.9) 40%, rgba(230,170,124,0.7) 60%, rgba(230,170,124,0.4) 80%, rgba(230,170,124,0.2) 100%, rgba(230,170,124,0) 120%)",
                            filter: "blur(10px)",
                        }}
                    ></div>
                </div>

                {/* Subtle seam gradient (desktop only) */}
                <div
                    className="absolute top-0 bottom-0 left-[65%] w-[60px] pointer-events-none z-20 hidden md:block"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(230,170,124,0.3) 50%, rgba(230,170,124,0) 100%)",
                        transform: "translateX(-50%)",
                    }}
                ></div>
            </section>





            {/* WHY CHOOSE */}
             <section
                        className="relative py-6 px-6 md:px-32 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                        }}
                    >
                        {/* WHITE SOFT OVERLAY */}
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        
                        {/* MAIN CONTENT - Takes available space, pushes boxes to bottom */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 md:gap-4 flex-grow">
                            {/* LEFT — IMAGE STACK */}
                            <div className="relative flex justify-center md:justify-start">
                                {/* LEFT IMAGE — Tilted left */}
                                <img
                                    src={pics2}
                                    className="w-48 md:w-[200px] h-68 md:h-[300px]  object-cover  -rotate-3"
                                    alt="Dales Way scenery"
                                />
        
                                {/* RIGHT IMAGE — Tilted right */}
                                <img
                                    src={pics1}
                                    className="w-48 md:w-[230px] h-48 md:h-[320px]  object-cover  absolute top-20 left-16 rotate-3"
                                    alt="Dales Way river"
                                />
                            </div>
        
                            {/* RIGHT — TEXT CONTENT */}
                            <div className="pt-5 w-full">
                                <h2
                                    className="font-raleway font-semibold italic text-center md:text-left text-[#4B4B4B] w-full whitespace-nowrap text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] leading-tight mb-8"
                                >
Why choose Coast to Coast?                                </h2>
        
                                <ul className="space-y-7 text-[18px] md:text-[20px] text-[#C56441] font-medium">
                                    <li className="flex gap-3 items-start md:gap-4">
                                        <img src={icon1} className="w-7 h-7 object-contain" alt="Checklist" />
                                        <span className="font-nunito text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-semibold text-[#C56441]">
One of the world’s greatest long-distance hikes
                                        </span>
                                    </li>
        
                                    <li className="flex gap-3 items-start md:gap-4">
                                        <img src={icon2} className="w-7 h-7 object-contain" alt="Balance" />
                                        <span className="font-nunito text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-semibold text-[#C56441]">
Crosses three national parks and two coasts
                                        </span>
                                    </li>
        
                                    <li className="flex gap-3 items-start md:gap-4">
                                        <img src={icon3} className="w-7 h-7 object-contain" alt="Guide" />
                                        <span className="font-nunito text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-semibold text-[#C56441]">
Achievable in flexible guided sections
                                        </span>
                                    </li>

                                      <li className="flex gap-3 items-start md:gap-4">
                                        <img src={icon4} className="w-7 h-7 object-contain" alt="Guide" />
                                        <span className="font-nunito text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] font-semibold text-[#C56441]">
Deeply immersive — landscape, history, and endurance combined
                                        </span>
                                    </li>
                                </ul>
                            </div>
        
                        </div>
        
                        {/* FOUR RECTANGULAR BOXES AT THE BOTTOM */}
                        <div className="relative z-10 mt-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Box 1 */}
                            <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-60"></div>
        
                            {/* Box 2 */}
                            <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-60"></div>
        
                            {/* Box 3 */}
                            <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-60"></div>
        
                            {/* Box 4 */}
                            <div className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-60"></div>
                        </div>
        
                    </section>


        </div>
    );
}
