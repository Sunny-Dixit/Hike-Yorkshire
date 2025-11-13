import React from "react";
import hikeImage from "../../assets/Hike/tailoredhike.jpg";

export default function TailoredHikeSection() {
    return (
        <section
            className="relative py-16 md:py-30 px-4 sm:px-6 md:px-16 bg-cover bg-center"
            style={{
                backgroundImage: `url(${hikeImage})`,
            }}
        >
            {/* White overlay */}
            <div className="absolute inset-0 bg-white/50"></div>

            {/* Content */}
            <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Left Text Section */}
                <div className="p-6 md:p-8 flex-1 w-full">
                    <h2
                        className="mb-4 md:mb-3 text-2xl md:text-[32px] leading-8 md:leading-[48px]"
                        style={{
                            fontFamily: "Raleway, sans-serif",
                            fontWeight: 700,
                            color: "#C56441",
                            letterSpacing: "0",
                        }}
                    >
                        Got a hike in mind?
                    </h2>

                    <p
                        className="mb-6 md:mb-5 text-base md:text-[20px] leading-6 md:leading-[36px]"
                        style={{
                            fontFamily: "Nunito Sans, sans-serif",
                            fontWeight: 500,
                            color: "#434343",
                            letterSpacing: "0",
                        }}
                    >
                        We're happy to plan a tailored hike just for your group, whether it's a new route or a custom day out in nature.
                    </p>

                    <button
                        style={{
                            fontFamily: "Nunito Sans, sans-serif",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: "0",
                            backgroundColor: "#3B4B62",
                            color: "#FFFFFF",
                        }}
                        className="px-5 py-3 md:py-2 rounded-md hover:bg-[#2e3a55] transition-colors text-base md:text-[18px] leading-6 md:leading-[27px]"
                    >
                        Request Tailored Hike
                    </button>
                </div>

                {/* Right Image Section */}
                <div className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={hikeImage}
                            alt="Tailored Hike"
                            className="w-full h-48 sm:h-56 md:h-72 lg:h-82 object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}