/* eslint-disable react/no-unescaped-entities */
import React from "react";
import blog1 from "../../assets/Blog/blog1.jpg";
import blog2 from "../../assets/Blog/blog2.jpg";
import blog3 from "../../assets/Blog/blog3.jpg";
import blogIcon from "../../assets/Blog/blogicon.png";

const blogPosts = [
  {
    id: 1,
    title: "The 5 Best Hikes in Yorkshire for beginners",
    desc: "Discover peaceful paths and breathtaking views ideal for those new to hiking the Yorkshire Dales",
    tags: ["Best hikes Yorkshire", "Yorkshire walking trails", "Hiking Yorkshire Dales"],
    img: blog1,
  },
  {
    id: 2,
    title: "The 5 Best Hikes in Yorkshire for intermediates",
    desc: "Combination of Easy, Moderate and Challenging Peaks",
    tags: ["Best hikes Yorkshire", "Yorkshire walking trails", "Hiking Yorkshire Dales"],
    img: blog2,
  },
  {
    id: 3,
    title: "The 5 Best Hikes in Yorkshire for intermediates",
    desc: "Combination of Easy, Moderate and Challenging Peaks",
    tags: ["Best hikes Yorkshire", "Yorkshire walking trails", "Hiking Yorkshire Dales"],
    img: blog3,
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 md:py-18 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 px-4">
        <h2 className="text-[#C56441] font-raleway font-bold text-2xl sm:text-3xl md:text-[32px] leading-8 sm:leading-10 md:leading-[48px] mb-4">
          Blog
        </h2>
        <p className="font-nunito font-normal text-base sm:text-lg md:text-[20px] leading-6 sm:leading-7 md:leading-[29px] text-[#434343]">
          See why explorers of all ages love these hikes — get expert tips, route guides,
          and inspiration for your next adventure.
        </p>
      </div>

      {/* Grid layout with customized width control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* Left — Featured Post */}
        <div className="relative overflow-hidden w-full h-80 sm:h-96 md:h-[551px] rounded-3xl lg:rounded-[32px]">
          <img src={blogPosts[0].img} className="absolute inset-0 w-full h-full object-cover" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Top Badge */}
          <span className="absolute top-4 right-4 bg-white text-xs md:text-[12px] font-nunito font-medium text-[#2B2B2B] px-3 py-1 rounded-full shadow-sm flex items-center gap-2 max-w-[90%] sm:max-w-none">
            <img src={blogIcon} alt="icon" className="w-4 h-4" />
            <span className="truncate">Sam's Top Tip - Bring Spare Socks</span>
          </span>

          {/* Bottom Text */}
          <div className="absolute bottom-4 left-4 text-white w-[90%] sm:w-[85%]">
            <h3 className="font-raleway text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-8 lg:leading-[36px] mb-2">
              {blogPosts[0].title}
            </h3>
            <p className="font-nunito font-medium text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[27px] tracking-[0] mb-3">
              {blogPosts[0].desc}
            </p>
            <p className="font-nunito font-semibold text-xs sm:text-[14px] leading-4 sm:leading-[21px] tracking-[0] opacity-90">
              {blogPosts[0].tags.map((tag) => `#${tag} `)}
            </p>
          </div>
        </div>

        {/* Right — Two stacked cards */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] w-full">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 w-full h-auto sm:h-48 md:h-60 lg:h-[259.5px] bg-white rounded-3xl lg:rounded-[32px] overflow-hidden"
            >
              {/* Image */}
              <div className="w-full sm:w-48 md:w-56 lg:w-[259.5px] h-48 sm:h-full shrink-0">
                <img 
                  src={post.img} 
                  className="w-full h-full object-cover rounded-3xl lg:rounded-[32px]" 
                  alt={post.title}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-4 sm:p-0 sm:pr-4 w-full">
                <span className="bg-white shadow-md text-[#2B2B2B] text-xs md:text-[12px] leading-4 md:leading-[18px] tracking-[0] font-nunito font-medium px-3 py-1 rounded-full inline-flex items-center gap-2 w-fit mb-2 sm:mb-0">
                  <img src={blogIcon} alt="icon" className="w-3 h-3" />
                  Sam's Top Tip — Bring Spare Socks
                </span>

                <h3 className="font-raleway font-bold text-lg md:text-xl lg:text-[20px] leading-6 md:leading-7 lg:leading-[30px] tracking-[0] text-[#C46340] mt-2 sm:mt-2">
                  {post.title}
                </h3>

                <p className="font-nunito font-medium text-sm md:text-base lg:text-[16px] leading-5 md:leading-6 lg:leading-[24px] tracking-[0] text-[#6A6A6A] mt-2 max-w-full lg:max-w-[260px]">
                  {post.desc}
                </p>

                <p className="font-nunito font-semibold text-xs md:text-[12px] leading-4 md:leading-[18px] tracking-[0] text-[#D39078] mt-2 sm:mt-3">
                  {post.tags.map((tag) => `#${tag} `)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}