import multiDayHikeImg from "../../assets/Hike/MultiDayHike.jpg";

export default function MultiDayHikes() {
  const hikes = [
    {
      title: "Dales Way",
      desc: "Take on the Dales’ most iconic challenge",
      details: "82 miles • Intermediate • 5-8 days",
      cost: "From £50 per person",
      img: multiDayHikeImg,
    },
    {
      title: "Three Peaks",
      desc: "Conquer Yorkshire’s three tallest peaks in one adventure",
      details: "24 miles • Hard • 10-12 hours",
      cost: "From £65 per person",
      img: multiDayHikeImg,
    },
    {
      title: "Coast to Coast",
      desc: "Walk from sea to sea through breathtaking landscapes",
      details: "190 miles • Advanced • 10-14 days",
      cost: "From £120 per person",
      img: multiDayHikeImg,
    },
  ];

  return (
  <section className="py-10 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 md:px-0">
    {/* Section Heading */}
    <div className="mb-6">
      <h2 className="font-[Raleway] font-bold text-[22px] leading-[32px] text-[#C56441]">
        Multi-Day Hikes Across Yorkshire
      </h2>

      <p className="font-['Nunito_Sans'] font-normal text-[16px] leading-[28px] text-[#434343] mt-2">
        Take on unforgettable journeys that stretch beyond a single sunrise,
        and discover the Dales at their finest.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {hikes.map((hike, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col p-3"
        >
          {/* Image inside card with gap */}
          <img
            src={hike.img}
            alt={hike.title}
            className="w-full h-56 object-cover rounded-2xl mb-3"
          />

          {/* Card Content */}
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-['Nunito_Sans'] font-bold text-[20px] leading-[30px] text-[#C56441] mb-1">
                {hike.title}
              </h3>

              <p className="font-['Nunito_Sans'] font-medium text-[16px] leading-[24px] text-[#434343] mb-1">
                {hike.desc}
              </p>

              <p className="font-['Nunito_Sans'] font-medium text-[14px] leading-[20px] text-[#434343] mb-3">
                {hike.details}
              </p>

              {/* Cost and Button in the same line */}
              <div className="flex items-center justify-between">
                <p className="font-['Nunito_Sans'] font-bold text-[#167800] text-[14px]">
                  Cost: {hike.cost}
                </p>

                <button className="border-2 border-[#C56441] bg-[#C56441] text-white font-['Nunito_Sans'] font-medium text-[13px] px-4 py-1.5 rounded-lg hover:bg-[#a9562f] transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
