import HeroSectionDemo from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/secondHero";
import { WhychooseUS } from "@/components/whychoose";
import { TestimonialsVariant } from "@/components/testimonials";
import { ServiceSection } from "@/components/service";
export default function Home() {
  return (
    <>
    <HeroSectionDemo/>
    <ServiceSection />
    <PortfolioSection/>
    <TestimonialsVariant/>
    <WhychooseUS/>
    <HeroSection></HeroSection>
    <Footer/>
   </>

  );
}
