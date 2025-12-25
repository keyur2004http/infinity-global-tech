'use client'
import { useState } from 'react'
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const [menuState, setMenuState] = useState(false)
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // call your contact backend API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thanks! We’ll contact you soon.");
        setEmail("");
      } else {
        setMessage("Something went wrong, try again.");
      }
    } catch (err) {
      setMessage("⚠️ Network error, please retry.");
    } finally {
      setLoading(false);
    }
  };
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61577609976006&mibextid=qi2Omg&rdid=lfVXXchcpwafUCMz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15gsubb944%2F%3Fmibextid%3Dqi2Omg#" },
    { icon: Instagram, url: "https://www.instagram.com/infinityglobaltech_official/" },
    { icon: Youtube, url: "https://www.youtube.com/@infinityglobaltech" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/infinity-global-tech-472318371/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-800 text-white">


        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
          <div className="absolute -left-20 top-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -right-20 top-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />

          {/* Floating icons */}
          <span className="absolute top-10 left-10 w-6 h-6 bg-cyan-400/20 rounded-full animate-floatSlow" />
          <span className="absolute top-24 left-32 w-3 h-3 bg-cyan-400/20 rounded-full animate-float" />

          <span className="absolute top-1/2 -left-6 w-10 h-10 bg-cyan-400/10 rounded-full animate-floatSlow" />
          <span className="absolute bottom-24 left-24 w-4 h-4 bg-cyan-400/20 rounded-full animate-floatFast" />
          <span className="absolute bottom-0 right-280 w-84 h-84 bg-cyan-400/10 rounded-full animate-floatFast" />
          <span className="absolute top-0 left-260 w-84 h-84 bg-cyan-400/10 rounded-full animate-floatFast" />

          {/* LOGO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 flex items-center justify-center rounded-full bg-white/10 shadow-lg"
          >
            <img
              src="/Assets/global.png"
              alt="Infinity Global Tech"
              className="w-16 h-16 object-contain"
            />
          </motion.div>

          {/* BRAND */}
          <h3 className="text-xl font-semibold tracking-wide">
            Infinity Global Tech
          </h3>

          {/* DESCRIPTION */}
          <motion.p 
          initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          className="text-sm text-white/80 max-w-2xl leading-relaxed">
            We are a passionate team of digital marketers and developers dedicated to crafting impactful
            online presences that drive growth and connect with your audience.
          </motion.p>

          {/* EMAIL FORM (RIGHT PLACE ✅) */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}

            className="w-full flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-white/90">
              Have a question or need support?
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-md mx-auto mt-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-14 pl-5 pr-16 rounded-full
               bg-white/10 border border-white/20
               text-white placeholder:text-white/50
               focus:outline-none focus:border-blue-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2
               w-21 h-12 rounded-full
               bg-cyan-700  hover:bg-blue-500
               flex items-center justify-center
               transition disabled:opacity-60"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                )}
              </button>
            </form>


            {message && (
              <p className="text-xs text-white/70">{message}</p>
            )}
          </motion.div>

          {/* NAVIGATION */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium mt-">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={item === "Products" ? "/#portfolio" : `/${item.toLowerCase()}`}
                className="hover:text-blue-300 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* SOCIAL ICONS */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-cyan-200/10 text-gray-300 hover:scale-110 transition shadow-md"
              >
                <Icon size={25} />
              </a>
            ))}
          </motion.div>

          {/* COPYRIGHT */}
          <p className="text-xs text-white/50 ">
            © {new Date().getFullYear()} Infinity Global Tech. All rights reserved.
          </p>

        </div>
      </section>

    </>
  )
}
export default function SubscribeForm() {

}