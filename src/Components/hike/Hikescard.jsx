import { Clock, Mountain, TrendingUp } from "lucide-react";

export default function HikeCard({ title, description, img, length, time, difficulty, cost }) {
  return (
    <div className="bg-white rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-full">
      {/* Image */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-[220px] object-cover"
        />

        {/* Info tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <div className="bg-white/90 backdrop-blur-md text-[#C56441] text-[13px] font-medium flex items-center gap-1 px-3 py-[4px] rounded-full shadow-sm">
            <Mountain size={14} /> Length - {length}
          </div>
          <div className="bg-white/90 backdrop-blur-md text-[#C56441] text-[13px] font-medium flex items-center gap-1 px-3 py-[4px] rounded-full shadow-sm">
            <Clock size={14} /> Time - {time}
          </div>
          <div className="bg-white/90 backdrop-blur-md text-[#C56441] text-[13px] font-medium flex items-center gap-1 px-3 py-[4px] rounded-full shadow-sm">
            <TrendingUp size={14} /> Difficulty - {difficulty}
          </div>
        </div>
      </div>

      {/* Text section */}
      <div className="p-5 flex flex-col justify-between h-[180px]">
        <div>
          <h3 className="text-[20px] font-semibold text-[#C56441]">{title}</h3>
          <p className="text-gray-700 text-[15px] mt-1">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-green-700 font-semibold text-[15px]">
            Cost : <span className="text-green-800">{cost}</span>
          </p>
          <button className="bg-[#C56441] hover:bg-[#a5512f] text-white text-[14px] font-medium px-4 py-2 rounded-md transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
