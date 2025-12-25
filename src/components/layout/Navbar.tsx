"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/#service" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ hide = false }) {
  if (hide) return null; 
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 mx-auto  z-[9999] px-3 max-w-6xl transition-all duration-300 ${scrolled
          ? "top-2 opacity-100"
          : "top-6 opacity-90"
        }`}
    >
      <div className="w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-full shadow-lg px-4 sm:px-6 py-4 flex items-center justify-between overflow-hidden">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-2">
          <img
            src="./Assets/global.png"
            alt="Logo"
            className="h-12 w-auto"
          />

          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-slate-900">
              Infinity Global Tech
            </span>
            <span className="text-xs font-semibold text-cyan-950">
              Digital Marketing & IT Solutions
            </span>
          </Link>
        </div>

        {/* LOGO */}


        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition ${isActive
                    ? "text-cyan-600 font-semibold"
                    : "text-slate-700 hover:text-cyan-500"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden mt-3 mx-auto w-full max-w-[92%] bg-white rounded-2xl shadow-xl p-6 text-center space-y-4">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-medium ${isActive ? "text-cyan-600" : "text-slate-700"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
