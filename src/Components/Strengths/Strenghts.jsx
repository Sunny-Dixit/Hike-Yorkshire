// ✅ Import icons properly
import ExMilitary from "../../assets//icons/ex-militry.png";
import Minibus from "../../assets/icons/minibus.png";
import Skills from "../../assets/icons/skills.png";
import SmallGroups from "../../assets/icons/smallgroups.png";
import Sustainable from "../../assets/icons/sustainabletourism.png";
import Walking from "../../assets/icons/walking.png";

export default function Strengths() {
    const strengths = [
        {
            title: "Ex-Military Guides",
            desc: "Experienced, disciplined, and safety-focused leaders you can trust",
            icon: ExMilitary,
        },
        {
            title: "Sustainable Tourism",
            desc: "Explore responsibly while preserving Yorkshire’s natural beauty",
            icon: Sustainable,
        },
        {
            title: "Small Groups",
            desc: "Personalized experiences with space to learn and connect",
            icon: SmallGroups,
        },
        {
            title: "Minibus Hire",
            desc: "Comfortable transport for group adventures across the Dales",
            icon: Minibus,
        },
        {
            title: "Skills Courses",
            desc: "Learn navigation, first aid, and essential outdoor techniques",
            icon: Skills,
        },
        {
            title: "Walking Tours",
            desc: "Discover Yorkshire’s history, culture, and landscapes up close",
            icon: Walking,
        },
    ];

    return (
      <section id="strengths" className=" flex justify-center">
  <div className="w-full max-w-4xl"> {/* ✅ limits width & centers */}
    
    {/* Title + Subtitle */}
    <div className="text-center mb-4 py-6 px-4 rounded-xl mx-auto">
      <h2 className="font-raleway font-bold text-[32px] leading-[48px] text-center text-[#926A39]">
        Our Strengths. Your Adventure.
      </h2>
      <p className="font-nunito font-normal text-[20px] leading-[36px] text-center text-[#434343] mt-3">
        Expert-led, sustainable, and small-group experiences across the Yorkshire Dales.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center justify-center">
      {strengths.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={item.icon}
            alt={item.title}
            className="w-[104px] h-[104px] rounded-[60px] opacity-100 mb-4"
          />

          <h3 className="font-nunito font-bold text-[20px] leading-[36px] text-center text-[#C56441]">
            {item.title}
          </h3>

          <p className="font-nunito font-medium text-[18px] leading-[27px] text-center text-[#434343] max-w-[200px] mt-2">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

    );
}
