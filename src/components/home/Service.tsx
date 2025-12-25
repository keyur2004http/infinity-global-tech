"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, BarChart3, CheckCircle, ArrowRight, Share2 } from "lucide-react"
import Link from "next/link"
const floatAnimation = {
    animate: {
        y: [0, -15, 0],
    },
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
}

export default function ServicesSection() {
    const services = [
        {
            title: "Web Design",
            desc: "Modern, responsive and conversion-focused designs.",
            icon: <Code2 className="text-white w-6 h-6" />,
            color: "from-purple-500 to-purple-700",
            shadow: "shadow-purple-200",
            delay: 0
        },
        {
            title: "Strategy",
            desc: "Creative ideas backed with research and market strategy.",
            icon: <Lightbulb className="text-white w-6 h-6" />,
            color: "from-emerald-400 to-emerald-600",
            shadow: "shadow-emerald-200",
            delay: 0.2
        },
        {
            title: "SEO & Growth",
            desc: "Rank higher and reach more customers worldwide.",
            icon: <BarChart3 className="text-white w-6 h-6" />,
            color: "from-orange-400 to-orange-600",
            shadow: "shadow-orange-200",
            delay: 0.4
        },
        {
            title: "Social Media",
            desc: "Build community and engagement across all platforms.",
            icon: <Share2 className="text-white w-6 h-6" />,
            color: "from-blue-400 to-blue-600",
            shadow: "shadow-blue-200",
            delay: 0.6
        }
    ]

    return (
        <section id="service"
        className="relative z-0 py-16 md:py-24 bg-white overflow-hidden font-[var(--font-body)] bg-gradient from-white via-white to-[#f5ecff]">

            <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-cyan-700 rounded-full">
                        Our Expertise
                    </span>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6 font-[var(--font-heading)]">
                        We provide{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                            awesome
                        </span>
                        <br /> digital services
                    </h2>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                        Elevate your brand with our custom-tailored solutions designed for modern growth.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
                        {["Custom development", "Data-driven marketing", "User-centric design"].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: i * 0.15 }}
                                className="flex items-center gap-3 text-slate-700 font-medium"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-cyan-600 text-white font-medium shadow-lg cursor-pointer"
              >
                View All Service
              </motion.button>
            </Link>
                </motion.div>

                {/* RIGHT SERVICE CARDS */}
                <div className="relative grid grid-cols-2 sm:grid-cols-2 gap-6 lg:block lg:h-[600px]">

                    {/* BACKGROUND GLOW */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px]
        bg-blue-400/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-[260px] h-[260px]
        bg-indigo-500/10 rounded-full blur-3xl" />
                    </div>

                    {services.map((service, index) => (
                        <motion.div
                            key={index}

                            /* ENTRY ANIMATION */
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}

                            /* FLOATING LOOP */


                            className={`
          bg-white/60 backdrop-blur-md border border-white/20
          rounded-3xl shadow-xl p-6 lg:p-8
          hover:scale-105 transition-transform duration-500
          lg:absolute lg:w-64
          ${index === 0 ? "lg:top-10 lg:left-0" : ""}
          ${index === 1 ? "lg:top-25 lg:right-0" : ""}
          ${index === 2 ? "lg:bottom-20 lg:left-0" : ""}
          ${index === 3 ? "lg:bottom-0 lg:right-0" : ""}
        `}
                        >
                            <div
                                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl
          bg-gradient-to-br ${service.color}
          flex items-center justify-center mb-5 shadow-lg ${service.shadow}`}
                            >
                                {service.icon}
                            </div>

                            <h4 className="font-bold text-slate-900 text-lg lg:text-xl mb-2 font-[var(--font-heading)]">
                                {service.title}
                            </h4>

                            <p className="text-sm text-slate-500 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}