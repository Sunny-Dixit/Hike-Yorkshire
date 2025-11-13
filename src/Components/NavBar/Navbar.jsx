import React, { useState, useEffect } from "react";
import { HeartIcon, ShoppingCartIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl bg-white/20 mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-[20px] font-semibold leading-[100%] text-black font-raleway"
          >
            Hike Yorkshire
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-[16px] font-medium leading-[100%] text-[#1D1D1D] font-nunito">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/hikes" className="hover:text-orange-500">Hikes</a></li>
            <li><a href="/Walking-Tours" className="hover:text-orange-500">Walking Tours</a></li>
            <li><a href="#about" className="hover:text-orange-500">Courses</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact Us</a></li>
          </ul>

          {/* Desktop Icons (Heart + Cart) */}
          <div className="hidden md:flex">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <HeartIcon className="h-6 w-6 text-[#000000]" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <ShoppingCartIcon className="h-6 w-6 text-[#000000]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
<button
  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
  onClick={() => setIsMobileMenuOpen(true)}
>
  <Bars3Icon className="h-6 w-6 text-[#000000]" />
</button>

        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={`md:hidden fixed top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Header / Brand */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <a
              href="/"
              className="text-[20px] font-semibold font-[Raleway] text-[#1D1D1D]"
              onClick={handleLinkClick}
            >
              Hike Yorkshire
            </a>
            {/* Close Button */}
            <button
              onClick={handleLinkClick}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Menu Links */}
          <div className="p-6">
            <ul className="flex flex-col gap-6 text-[18px] font-medium leading-[100%] text-[#1D1D1D] font-['Nunito_Sans']">
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-[#C65A2E] transition-colors"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/hikes"
                  className="block py-2 hover:text-[#C65A2E] transition-colors"
                  onClick={handleLinkClick}
                >
                  Hikes
                </a>
              </li>
              <li>
                <a
                  href="/Walking-Tours"
                  className="block py-2 hover:text-[#C65A2E] transition-colors"
                  onClick={handleLinkClick}
                >
                  Walking Tours
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="block py-2 hover:text-[#C65A2E] transition-colors"
                  onClick={handleLinkClick}
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 hover:text-[#C65A2E] transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Icons Section */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <HeartIcon className="h-6 w-6 text-[#000000]" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <ShoppingCartIcon className="h-6 w-6 text-[#000000]" />
              </button>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}