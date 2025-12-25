"use client"

import { motion } from "framer-motion"
import { BarChart3, LineChart, PieChart } from "lucide-react"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";



export default function HeroSections() {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/infinityglobaltech_official/" },
    { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61577609976006&mibextid=qi2Omg&rdid=lfVXXchcpwafUCMz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15gsubb944%2F%3Fmibextid%3Dqi2Omg#" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/infinity-global-tech-472318371/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: FaYoutube, url: "https://www.youtube.com/@infinityglobaltech" },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };
  return (

    
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-400/10 to-blue-400/10 
      md:bg-gradient-to-bl md:from-[#f5ecff] md:via-[#f1e7ff] md:to-white">

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 mt-10"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            variants={fadeUp}
            custom={0}
            viewport={{ once: false }}
            className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900"
          >
            A Digital <br />
            Product Design <br />
            Agency
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 text-gray-600 max-w-lg"
          >
            We help businesses grow by designing high-quality digital products
            and experiences that users love.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 flex items-center gap-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-cyan-600 text-white font-medium shadow-lg cursor-pointer"
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex gap-3 mt-10"
          >
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-8 h-8 text-cyan-600 cursor-pointer" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE + FLOATING CARDS */}
        <div className="relative flex justify-center items-center w-[360px] lg:w-[540px] h-[520px] mx-auto">

          {/* MAIN IMAGE */}
          <motion.img
            src="/Assets/bg/medam.png"
            alt="Hero"
            className="relative z-20 w-full max-w-[480px] object-contain pointer-events-none"
            viewport={{ once: false }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* FLOATING CARD — LINE */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-2 lg:right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 z-40"
          >
            <LineChart className="text-indigo-400 w-5 h-5" />
            <span className="text-sm font-medium">Growth</span>
          </motion.div>

          {/* FLOATING CARD — PIE */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-36 left-0 lg:left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 z-40"
          >
            <PieChart className="text-indigo-400 w-5 h-5" />
            <span className="text-sm font-medium">Analytics</span>
          </motion.div>

          {/* FLOATING CARD — SKILLS */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-40 bg-white rounded-xl shadow-xl
              bottom-4 right-2 w-36 p-3 scale-90
              md:bottom-8 md:right-0 md:w-44 md:p-4 md:scale-100"
          >
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="text-indigo-400 w-5 h-5" />
              <span className="text-sm font-medium">Skills</span>
            </div>

            <div className="flex gap-1 items-end h-12">
              {[40, 60, 50, 80, 65, 88, 22, 44, 47, 26, 84].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05 }}
                  className="w-2 bg-indigo-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

  )
}
