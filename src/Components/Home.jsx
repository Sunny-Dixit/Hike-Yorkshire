// src/Pages/Home.jsx
import React from 'react';
import Hero from '../Components/hero/Hero';
import Strengths from '../Components/Strengths/Strenghts';
import Team from '../Components/team/Team';
import FeaturedHikes from '../Components/hike/FeaturedHike';
import MultiDayHikes from '../Components/hike/MultiDayHikes';
import AboutSection from '../Components/about/About';
import SecretYorkshire from '../Components/Secret/SecretYorkshire';
import Testimonials from '../Components/testimonials/Testimonials';
import BlogSection from '../Components/blog/Blogs';
import WalkingTours from '../Components/WalkingTours/walkingtours';
import TailoredHikeSection from '../Components/hike/TailoredHike';
import NavBar from '../Components/NavBar/Navbar';


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
        <NavBar />
      <Hero />
      <Strengths />
      <Team />
      <FeaturedHikes />
      <MultiDayHikes />
      <AboutSection />
      <SecretYorkshire />
      <WalkingTours />
      <TailoredHikeSection />
      <Testimonials />
      <BlogSection />
    </div>
  );
}
