"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <img src="/Assets/icones/helpdesk.gif" alt="24/7 Support" className="w-20 h-18" />,
    title: "24/7 Lifetime Support",
    description: "Our team is always available to assist you, anytime you need.",
  },
  {
    icon: <img src="/Assets/icones/speedometer.gif" alt="On-Time Delivery" className="w-20 h-18" />,
    title: "On-Time Delivery",
    description: "We value your time and ensure timely execution of campaigns.",
  },
  {
    icon: <img src="/Assets/icones/best-price.gif" alt="Affordable Pricing" className="w-20 h-18" />,
    title: "Affordable Pricing",
    description: "Get premium digital marketing services that fit your budget.",
  },
  {
    icon: <img src="/Assets/icones/feedback.gif" alt="Client Satisfaction" className="w-20 h-18" />,
    title: "Client Satisfaction",
    description: "We build long-term partnerships with 100% client satisfaction.",
  },
];


export function WhychooseUS() {
  return (
    <section className="w-full bg-background py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl text-gray-700 font-extrabold tracking-tight sm:text-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="mt-3 text-muted-foreground "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Infinity Global Tech delivers impactful digital solutions to grow your brand.
        </motion.p>
      </div>

      <div className="relative grid sm:grid-cols-4 grid-cols-2 gap-2 sm:gap-2 md:gap-2 justify-center">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="relative flex flex-col items-center px-4 py-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Icon */}
      <div className="mb-4 flex size-14 sm:size-16 items-center justify-center rounded-full  shadow-lg">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-sm sm:text-base md:text-lg font-semibold">
        {feature.title}
      </h3>
      <Separator orientation="vertical" className="hidden md:block absolute right-0 top-12 h-[180px] w-[2px] bg-gradient-to-b from-primary/40 via-transparent to-primary/40"></Separator>
      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-[220px] sm:max-w-xs">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

    </section>
  );
}
