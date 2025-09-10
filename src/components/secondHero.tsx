'use client'
import { Button } from '@/components/ui/button'
import {  Mail, SendHorizonal } from 'lucide-react'

import { useState } from 'react'

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
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
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background py-28 lg:py-32">
        <div className="relative mx-auto w-full px-6 lg:px-16">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* Left Content */}
            <motion.div
              className="relative z-10 max-w-2xl text-center lg:ml-0 lg:w-1/2 lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
             

              <motion.h1
                className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-6xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Production Ready Digital Marketing Blocks
              </motion.h1>

              <motion.p
                className="mt-8 text-lg text-muted-foreground "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Infinity Global Tech helps you grow faster with modern digital
                solutions, creative campaigns, and impactful strategies.
              </motion.p>

              {/* Form */}
              <motion.div

                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                >
                  <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                    <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                    <input
                      placeholder="Your mail address"
                      className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="md:pr-1.5 lg:pr-0">
                      <Button  className="bg-[#304068] cursor-pointer" type="submit" aria-label="Send email" disabled={loading}>
                        <span className="hidden md:block">
                          {loading ? "Sending..." : "Get Started"}
                        </span>
                        <SendHorizonal
                          className="relative mx-auto size-5 md:hidden"
                          strokeWidth={2}
                        />
                      </Button>
                    </div>
                  </div>

                  {message && (
                    <p className="mt-3 text-sm text-center text-muted-foreground">
                      {message}
                    </p>
                  )}
                </form>
              </motion.div>
            </motion.div>

            {/* Right Content (Image) */}
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3 sm:mt-10  mt-30">
              <div aria-hidden className="absolute z-[1] inset-0 bg-gradient-to-r from-background from-35% " />
              <div className="relative">

                <Image
                  className="dark:hidden"
                  src="/Assets/digital.png"
                  alt="app illustration"
                  width={2796}
                  height={1700}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default function SubscribeForm() {
  
}