"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { HeroNavBar } from "./navbar ";
import Footer from "./footer";


export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget as HTMLFormElement & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      phone: { value: string };
      message: { value: string };
    };

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    const res = await fetch("api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("✅ Message sent successfully!");
      form.reset();
    } else {
      setMessage(`❌ Failed: ${data.error}`);
    }
  };

  return (
    <>
    <HeroNavBar/>
    <section className="min-h-screen  flex items-center justify-center py-2 lg:mt-10 lg:py-26  ">
      <div className="max-w-6xl w-full shadow-lg rounded-lg   overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-200">
        {/* Left Side - Info */}
        
        <div className=" text-white p-10 flex flex-col justify-center bg-gray-900">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-8 text-gray-400">
            Have questions? We’d love to hear from you. Fill out the form and we’ll get back to you soon.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="text-xl text-gray-400" />
              <span>info.infinityglobaltech@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-xl text-gray-400" />
              <span>+91 6352540917</span>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-xl text-gray-400 mt-1" />
              <span>208,New shakti vijay soc , hirabag , varachha road , surat</span>
            </div>
          </div>
        </div>
       
        {/* Right Side - Form */}
        <div className="5">
          <form
            onSubmit={handleSubmit}
            className=" shadow-md rounded-lg p-6 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">
                Phone (with country code)
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
                className="mt-1 w-full border rounded-md px-3 py-2"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full border rounded-md px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && <p className="mt-4 text-center">{message}</p>}
          </form>
        </div>
      </div>
      
    </section>
    <Footer></Footer>
    </>
  );
}
