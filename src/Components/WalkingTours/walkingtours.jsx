import React from "react";
import walkingTour1 from "../../assets/WalkingTour/walkingTour1.jpg";
import walkingTour2 from "../../assets/WalkingTour/walkingTour2.jpg";

const tours = [
    {
        id: 1,
        title: "Ilkley",
        duration: "2 hours",
        description: "Industrial Ilkley • Ilkley Moor • Charles Darwin",
        cost: "£20pp",
        image: walkingTour1
    },
    {
        id: 2,
        title: "Ilkley",
        duration: "2 hours",
        description: "Industrial Ilkley • Ilkley Moor • Charles Darwin",
        cost: "£20pp",
        image: walkingTour2
    },
];

export default function WalkingTours() {
    return (
        <section className="bg-white py-16 px-6 md:px-16 font-raleway">
            <div className="max-w-7xl mx-auto">
                {/* Mobile: Stack layout */}
                <div className="block lg:flex lg:gap-10 lg:items-center">
                    {/* Left Text Section - Full width on mobile, fixed width on desktop */}
                    <div className="w-full lg:flex-shrink-0 lg:max-w-md mb-8 lg:mb-0">
                        <h2
                            className="text-[#C56441] font-bold mb-4"
                            style={{
                                fontSize: "clamp(28px, 5vw, 32px)",
                                lineHeight: "clamp(40px, 6vw, 48px)",
                            }}
                        >
                            Walking Tours in Yorkshire
                        </h2>
                        <p 
                            className="text-gray-600 leading-relaxed font-normal"
                            style={{
                                fontSize: "clamp(14px, 2vw, 16px)",
                            }}
                        >
                            Experience the charm of Yorkshire's countryside and culture on
                            expert-led tours for all abilities.
                        </p>
                    </div>

                    {/* Right Cards Section */}
                    <div className="w-full">
                        <div className="flex gap-6 overflow-x-auto py-4">
                            {tours.map((tour) => (
                                <div
                                    key={tour.id}
                                    className="flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden w-[280px] sm:w-[300px] border border-gray-100"
                                >
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="w-full p-2 rounded-3xl h-48 sm:h-56 object-cover"
                                    />
                                    <div className="p-4">
                                        <div className="flex justify-between items-center">
                                            <h3
                                                className="text-[#C33400]"
                                                style={{
                                                    fontFamily: "Nunito Sans",
                                                    fontWeight: 700,
                                                    fontStyle: "bold",
                                                    fontSize: "20px",
                                                    lineHeight: "36px",
                                                    letterSpacing: "0",
                                                }}
                                            >
                                                {tour.title}
                                            </h3>
                                            <span className="text-sm text-gray-500">{tour.duration}</span>
                                        </div>
                                        <p
                                            className="mt-1"
                                            style={{
                                                fontFamily: "Nunito Sans",
                                                fontWeight: 500,
                                                fontStyle: "normal",
                                                fontSize: "16px",
                                                lineHeight: "24px",
                                                letterSpacing: "0",
                                                color: "#434343",
                                            }}
                                        >
                                            {tour.description}
                                        </p>
                                        <div className="flex justify-between items-center mt-3">
                                            <p
                                                style={{
                                                    fontFamily: "Nunito Sans",
                                                    fontWeight: 700,
                                                    fontStyle: "bold",
                                                    fontSize: "16px",
                                                    lineHeight: "27px",
                                                    letterSpacing: "0",
                                                    color: "#167800",
                                                }}
                                            >
                                                Cost : {tour.cost}
                                            </p>
                                            <button className="bg-[#C56441] text-white text-sm px-4 py-1.5 rounded-md hover:bg-[#D86A45] transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}