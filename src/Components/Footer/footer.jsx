// src/Components/Footer.jsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import footerBg from "../../assets/Footer/footerbackground.png";

export default function Footer() {
    return (
      <footer className="relative w-full min-h-[400px] md:h-[400px] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={footerBg}
            alt="footer background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative pt-16 pb-20 md:pt-[120px] px-4 sm:px-6 lg:px-8 w-full max-w-[998px] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12 lg:gap-[220px]">
          {/* Column 1 */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-montserrat font-semibold text-xl sm:text-2xl md:text-[24px] leading-7 sm:leading-8 md:leading-[36px] whitespace-nowrap">
              Hike Yorkshire
            </h2>
            <p className="font-nunito font-normal text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[24px] opacity-90 max-w-full md:max-w-[240px] line-clamp-2">
              Discover Yorkshire's story, one trail at a time.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6 mt-4 md:mt-6 text-lg sm:text-xl md:text-[20px] text-[#D39078]">
              <FaInstagram className="cursor-pointer hover:scale-125 transition transform duration-200" />
              <FaFacebookF className="cursor-pointer hover:scale-125 transition transform duration-200" />
            </div>
          </div>

          {/* Column 2 + Column 3 grouped */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-[40px] mt-6 md:mt-0">
            {/* Column 2 */}
            <div className="text-center md:text-left">
              <h3 className="font-raleway font-semibold text-lg sm:text-xl md:text-[20px] leading-6 sm:leading-7 md:leading-[30px] mb-3 md:mb-4">
                Quick Links
              </h3>
              <ul className="space-y-1 font-nunito font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-[30px] opacity-90">
                <li className="hover:text-[#D39078] cursor-pointer transition-colors duration-200">Home</li>
                <li className="hover:text-[#D39078] cursor-pointer transition-colors duration-200">Hikes</li>
                <li className="hover:text-[#D39078] cursor-pointer transition-colors duration-200">Blog</li>
                <li className="hover:text-[#D39078] cursor-pointer transition-colors duration-200">Contact Us</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="text-center md:text-left">
              <h3 className="font-raleway font-semibold text-lg sm:text-xl md:text-[20px] leading-6 sm:leading-7 md:leading-[30px] mb-3 md:mb-4">
                Get In Touch
              </h3>
              <p className="font-nunito font-normal text-sm sm:text-base md:text-[16px] leading-5 sm:leading-6 md:leading-[30px] opacity-90">
                Yorkshire Dales National Park, UK <br />
                hello@hikeyorkshire.co.uk <br />
                +44 1234 567890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="absolute bottom-0 w-full text-center font-nunito font-normal text-xs sm:text-sm md:text-[14px] leading-4 sm:leading-5 md:leading-[18px] text-white opacity-80 py-3 md:py-4 px-4">
          © 2025 Hike Yorkshire. All rights reserved.
        </div>
      </footer>
    );
}