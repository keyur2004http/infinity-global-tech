"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
    {
        text: "Our online reach improved quickly thanks to their smart digital marketing approach.",
        name: "Mayur trivedi",
        role: "@Samor masala",
        rating: 5,
    },
    {
        text: "Professional team, creative ideas, and excellent support throughout the project.",
        name: "Chetan shah",
        role: "@Immitation Jwellery",
        rating: 5,
    },
    {
        text: "Great digital marketing service with clear strategy and real results. Highly recommended.!",
        name: "Kirit trivedi",
        role: "@Anshika flower",
        rating: 4,
    },
]
const FloatingAvatar = ({ src, className }: any) => (
    <motion.img
      src={src}
      className={`absolute rounded-full border-4 border-white shadow-md ${className}`}
  
      /* ENTRY ANIMATION */
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
  
      
    />  
)

export default function TestimonialSection() {
    const [index, setIndex] = useState(0)

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-20 md:py-24 bg-indigo-200/20
        md:bg-gradient-to-bl md:from-[#f5ecff] md:via-[#f1e7ff] md:to-white relative overflow-hidden">
            {/* HEADING */}
            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12 px-4"
>

                <p className="text-sm uppercase tracking-widest text-cyan-500 font-semibold">
                    Testimonial
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    What Client Say&apos;s
                </h2>
            </motion.div>

            {/* CENTER CARD */}
            <div className="relative max-w-xl mx-auto px-4">
                <AnimatePresence mode="wait">
                    {/* QUOTE ICON */}
                    <img
                        src="/Assets/icones/qoutes.png"
                        alt="Quote"
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20  p-3 shadow-md z-20"
                    />

                    <motion.div
                        key={index}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.3}
                        onDragEnd={(event, info) => {
                            if (info.offset.x < -80) {
                                setIndex((prev) => (prev + 1) % testimonials.length)
                            }
                            if (info.offset.x > 80) {
                                setIndex((prev) =>
                                    prev === 0 ? testimonials.length - 1 : prev - 1
                                )
                            }
                        }}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-white rounded-2xl shadow-xl px-6 sm:px-10 pt-14 pb-10 text-center cursor-grab active:cursor-grabbing"
                    >

                        {/* REVIEW TEXT */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                            {testimonials[index].text}
                        </p>

                        {/* ⭐ STARS */}
                        <div className="flex justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: i < testimonials[index].rating ? 1 : 0.8 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                >
                                    <Star
                                        className={`w-4 h-4 ${i < testimonials[index].rating
                                            ? "fill-cyan-600 text-cyan-600"
                                            : "text-gray-300"
                                            }`}
                                    />
                                </motion.div>
                            ))}
                        </div>


                        {/* NAME */}
                        <h4 className="font-semibold text-gray-900">
                            {testimonials[index].name}
                        </h4>
                        <p className="text-xs text-gray-500">
                            {testimonials[index].role}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* FLOATING AVATARS (DESKTOP ONLY) */}
                <FloatingAvatar
                    src="https://randomuser.me/api/portraits/men/7.jpg"
                    className="
                    left-2 top-0 w-12
                    sm:left-6 sm:top-2 sm:w-14
                    md:-left-10 md:top-8 md:w-16
                    lg:-left-20 lg:top-10 lg:w-20
                "
                />

                <FloatingAvatar
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    className="
                    right-2 top-20 w-12
                    sm:right-6 sm:top-14 sm:w-14
                    md:-right-10 md:top-16 md:w-16
                    lg:-right-20 lg:top-20 lg:w-20
                "
                />

                <FloatingAvatar
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    className="left-6 sm:left-16 -bottom-16 w-14 sm:w-20"
                />


                <FloatingAvatar
                    src="https://randomuser.me/api/portraits/women/18.jpg"
                    className="right-6 sm:right-16 -bottom-16 w-14 sm:w-20"
                />

            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-10">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-cyan-600" : "bg-indigo-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}
