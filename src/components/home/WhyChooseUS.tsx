"use client"

import { motion } from "framer-motion"
import { BarChart3, Sparkles } from "lucide-react"

const float = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden font-[var(--font-body)] bg-gradient-to-b from-blue-400/10 to-white
    md:bg-gradient-to-br md:from-white md:via-[#f1e7ff]/60 md:to-[#f5ecff]
     ">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative flex justify-center"
        >


          {/* Person Image */}
          <motion.img
            src="/Assets/bg/boy.png"
            alt="Expert"
            className="relative z-10 max-w-[280px] sm:max-w-[280px] md:max-w-[390px]"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="absolute z-30
    top-30 left-[-10]
    md:top-42 md:-left-0
    text-[12px] md:text-sm
    px-3 py-1.5 md:px-4 md:py-2
    bg-white shadow-lg rounded-full font-medium"
          >
            Performance You Can Track
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute z-30
    top-[45%] right-0              /* 📱 mobile */
    md:top-1/2 md:-right-8         /* 💻 md+ */
  
    text-[12px] md:text-sm
    px-3 py-1.5 md:px-4 md:py-2
  
    bg-indigo-400 text-white shadow-lg rounded-full font-medium
    scale-90 md:scale-100"
          >
            24/7 Customer Support

          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            viewport={{ once: false }}
            className="absolute z-30
    bottom-4 left-3                /* 📱 mobile */
    md:bottom-10 md:left-10        /* 💻 md+ */
  
    text-[12px] md:text-sm
    px-3 py-1.5 md:px-4 md:py-2
  
    bg-white shadow-lg rounded-full font-medium
    scale-90 md:scale-100"
          >
            Affordable Solutions
          </motion.div>
        </motion.div>


        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}   // 👉 comes from right
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
            Exclusive Features
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 font-[var(--font-heading)]">
            Better Strategy. <br />  Real Growth.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md">
            We focus on real outcomes — more leads, better visibility, and measurable growth for your business.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-10">
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="flex gap-4 items-start"
  >
    <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-700 flex items-center justify-center">
      <BarChart3 className="w-6 h-6 text-white" />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900 mb-1">
        More Visibility Online
      </h4>
      <p className="text-sm text-slate-600">
        Get found on Google and social media by the customers searching.
      </p>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: 0.35 }}
    className="flex gap-4 items-start"
  >
    <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-700 flex items-center justify-center">
      <Sparkles className="w-6 h-6 text-white" />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900 mb-1">
        Content Optimization
      </h4>
      <p className="text-sm text-slate-600">
        We focus on quality leads that turn into real sales.
      </p>
    </div>
  </motion.div>
</div>

        </motion.div>


      </div>
    </section>
  )
}
