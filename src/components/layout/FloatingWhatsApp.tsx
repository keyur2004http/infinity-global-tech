"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  const hideOnPages = ["/login", "/admin"];

  // hide on specific pages
  if (hideOnPages.includes(pathname)) return null;

  // hide on scroll, show on stop
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setVisible(false);
      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(true), 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/+916352540917?text=Hi Infinity Global Tech, I’m interested in your services."
      target="_blank"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        md:hidden`}
    >
      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
