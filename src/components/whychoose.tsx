"use client";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  FiHeadphones,
  FiClock,
  FiShield,
  FiDollarSign,
  FiThumbsUp,
} from "react-icons/fi";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FiHeadphones className="size-6" />,
    title: "24/7 Lifetime Support",
    description: "Our team is always available to assist you, anytime you need.",
  },
  {
    icon: <FiClock className="size-6" />,
    title: "On-Time Delivery",
    description: "We value your time and ensure timely execution of campaigns.",
  },
  {
    icon: <FiShield className="size-6" />,
    title: "Trusted & Secure",
    description: "Your business data and campaigns are safe with our secure systems.",
  },
  {
    icon: <FiDollarSign className="size-6" />,
    title: "Affordable Pricing",
    description: "Get premium digital marketing services that fit your budget.",
  },
 
  {
    icon: <FiThumbsUp className="size-6" />,
    title: "Client Satisfaction",
    description: "We build long-term partnerships with 100% client satisfaction.",
  },
];

export function WhychooseUS() {
  return (
    <section className="w-full bg-background py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-extrabold tracking-tight sm:text-3xl"
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

      <div className="relative flex flex-col md:flex-row md:justify-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative flex flex-1 flex-col items-center px-8 py-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10 shadow-lg">
              {feature.icon}
            </div>
            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
            <p className="text-base text-muted-foreground text-center max-w-xs">
              {feature.description}
            </p>

            {index < features.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block absolute right-0 top-12 h-[180px] w-[2px] bg-gradient-to-b from-primary/40 via-transparent to-primary/40"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
