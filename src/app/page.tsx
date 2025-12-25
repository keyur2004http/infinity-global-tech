
"use client"
import { useState } from "react";
import HeroSections from "@/components/home/Hero";
import ServicesSections from "@/components/home/Service";
import TestimonialSection from "@/components/home/Testimonials";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import PortfolioSection from "@/components/home/Portfolio";
import WhyChooseUs from "@/components/home/WhyChooseUS";



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <Navbar hide={isModalOpen} />
    <HeroSections></HeroSections>
    <ServicesSections></ServicesSections>
    <WhyChooseUs></WhyChooseUs>
    <PortfolioSection setIsModalOpen={setIsModalOpen} />
    <FloatingWhatsApp></FloatingWhatsApp>
    <TestimonialSection></TestimonialSection> 
    <Footer></Footer>
   </>

  );
}

