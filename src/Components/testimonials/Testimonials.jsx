import TestimonialBg from '../../assets/Testimonial/testimonialbackground.jpg';
import ReviewerPhoto from '../../assets/Testimonial/reviewer.jpg'; // Replace with actual photo

export default function Testimonials() {
  return (
    <section
      className="relative py-12 md:py-15 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${TestimonialBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto py-8 md:py-28 px-4 md:px-6 lg:px-16 flex flex-col md:flex-row items-start gap-8 md:gap-16">
        {/* Left Text */}
        <div className="text-white flex flex-col justify-center w-full md:w-1/2">
          <h2
            style={{
              fontFamily: "Raleway, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 40px)",
              lineHeight: "clamp(40px, 6vw, 56px)",
              letterSpacing: "0",
            }}
            className="mb-4 md:mb-6"
          >
            What Our Hikers Say
          </h2>
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px, 3vw, 22px)",
              lineHeight: "clamp(28px, 4vw, 40px)",
              letterSpacing: "0",
              color: "#FFFFFF",
            }}
          >
            See why explorers of all levels choose Hike Yorkshire for their next adventure.
          </p>
        </div>

        {/* Right Testimonial Cards */}
        <div className="flex w-full md:w-1/2 overflow-x-auto gap-4 md:gap-6 scroll-smooth pb-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-80 md:w-96">
            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#4A4A4A",
                marginBottom: "1rem",
                textAlign: "left",
              }}
              className="md:text-[18px] md:leading-[28px]"
            >
              "I never thought I'd enjoy a long hike this much! Ryan made it feel easy and taught us so much about the local plants and rocks along the way."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={ReviewerPhoto}
                alt="Ryan"
                className="w-6 h-6 rounded-full object-cover"
              />
              <h3
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#333333",
                }}
              >
                Ryan Smith
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between flex-shrink-0 w-[85vw] sm:w-80 md:w-96">
            <p
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#4A4A4A",
                marginBottom: "1rem",
                textAlign: "left",
              }}
              className="md:text-[18px] md:leading-[28px]"
            >
              "Hiking with Hike Yorkshire was amazing! The scenery, guidance, and safety measures made it a perfect experience."
            </p>
            <div className="flex items-center gap-3">
              <img
                src={ReviewerPhoto}
                alt="Emily"
                className="w-6 h-6 rounded-full object-cover"
              />
              <h3
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#333333",
                }}
              >
                Emily Johnson
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}