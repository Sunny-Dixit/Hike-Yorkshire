import heroImage from "../../assets/Hero/hero-image.jpg";

export default function Hero() {
  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative h-[95vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0"></div>

        {/* Center Content */}
        <div className="text-center relative z-10 text-white px-6 flex flex-col items-center gap-3">
          <h1 className="font-raleway font-bold text-[48px] md:text-[64px] leading-[100%] text-center text-[#C56441]">
            Hike Yorkshire
          </h1>

          <p className="font-raleway font-medium text-[32px] md:text-[48px] leading-[100%] text-center text-[#5D5C5C]">
            Discover Yorkshire’s Story
          </p>

          <p className="font-nunito font-semibold text-[18px] md:text-[20px] leading-[120%] text-center text-[#4F4F4F] max-w-[600px]">
            Small group sustainable tours led by ex-military guides
          </p>

          <button
            className="mt-4 px-4 py-2 font-nunito font-semibold text-[16px] text-center
          bg-gradient-to-r from-[#C56441] to-[#F98B64] text-white rounded-full hover:opacity-90 transition"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* Bottom Text Section (Separate) */}
    <div className="w-full px-6 py-10 bg-white">
  <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="font-raleway font-semibold text-[30px] leading-[120%] text-[#C56441] text-center md:text-left">
      Journey through Yorkshire with expert guides
    </p>

    <p className="font-nunito font-normal text-[22px] leading-[41px] text-[#C56441] text-center md:text-right max-w-md">
      Hike Yorkshire offers guided outdoor adventures and educational walking tours across the Yorkshire Dales.
    </p>
  </div>
</div>

    </div>
  );
}
