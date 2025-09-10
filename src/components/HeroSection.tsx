import React from 'react';
import { HeroSection } from '@/components/ui/hero'; // Adjust the import path as needed
import { HeroNavBar } from './navbar ';

export default function HeroSectionDemo() {
  return (
    <>
    <HeroNavBar/>
    <div className="w-full mt-0 lg:mt-20">
    
      <HeroSection
        logo={{
            url: "./Assets/global.png",
            alt: "Company Logo",
            text: "INFINITY"
        }}
        slogan="Global Tech"
        title={
          <>
            Marketing Beyond  <br />
            <span className="text-primary">All Limits</span>
          </>
        }
        subtitle="We combine strategy, creativity, and technology to deliver campaigns that inspire, engage, and drive measurable growth."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "/contact",
        }}
        backgroundImage="./Assets/hero.png"
        
      />
    </div>
    </>
  );
}
