import { useState } from "react";
import { FaRoute } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { MdOutlineTerrain } from "react-icons/md";
import featuredBg from "../../assets/Hike/featuredhike.png"; // Background image
import hikeCardImg from "../../assets/Hike/featuredhikecardimage.jpg"; // ✅ Card image
import BookingModal from "../../Booking/BookingModel"; // ✅ adjust path


export default function FeaturedHikes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative py-8 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${featuredBg})`,
        maxWidth: "1280px",
        height: "auto",
        opacity: 1,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 text-left">
          <h2 className="font-[Raleway] font-bold text-[#926A39] text-[24px] leading-[36px] tracking-[0]">
            Top day hikes in Yorkshire
          </h2>
          <p className="font-['Nunito_Sans'] font-normal text-[16px] leading-[28px] text-[#434343] mt-2 max-w-3xl">
            Challenge yourself with our favorite full-day hikes across stunning northern landscapes.
          </p>
        </div>

        {/* Hike Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative p-3 pb-0">
                <img
                  src={hikeCardImg}
                  alt="Yorkshire 3 Peaks"
                  className="w-full h-84 object-cover rounded-xl"
                />

                {/* ✅ Full-width single-line info pills */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] flex justify-between items-center gap-2">
                  <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[13px] leading-[20px] whitespace-nowrap">
                    <FaRoute className="mr-1 text-[#C56441]" />
                    Length - 25 miles
                  </div>
                  <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[13px] leading-[20px] whitespace-nowrap">
                    <GiDuration className="mr-1 text-[#C56441]" />
                    Time - 12 hours
                  </div>
                  <div className="flex items-center bg-white px-3 py-1.5 rounded-full shadow-md text-[#2B2B2B] font-['Nunito_Sans'] font-medium text-[13px] leading-[20px] whitespace-nowrap">
                    <MdOutlineTerrain className="mr-1 text-[#C56441]" />
                    Difficulty - Hard
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-[Raleway] font-normal text-[#C56441] text-[20px] leading-[30px]">
                  Yorkshire 3 Peaks
                </h3>
                <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[24px] text-[#434343] mt-2">
                  Take on the Dales’ most iconic challenge
                </p>

                <div className="flex items-center justify-between mt-3">
                  <p className="font-['Nunito_Sans'] font-bold text-[18px] leading-[24px] text-[#167800]">
                    Cost: From £50 per person
                  </p>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="border-2 border-[#C56441] bg-[#C56441] text-white font-['Nunito_Sans'] text-[14px] px-5 py-1.5 rounded-lg hover:bg-[#a9562f] transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>

  );
}
