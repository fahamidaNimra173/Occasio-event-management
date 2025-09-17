"use client";

import { Original_Surfer } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useAuth } from "@/app/context/Authcontext";

const surfer = Original_Surfer({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-surfer",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/all-events" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors ${surfer.className} duration-300 ${
        scrolled ? "bg-[#ecafaf] dark:bg-[#a46060] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-15">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">
            <Link href="/">Occasio</Link>
          </div>
          <div className="flex-1"></div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-700 text-[20px] font-medium hover:text-indigo-600 transition ${
                  scrolled ? "" : "text-white hover:text-indigo-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7a9f99] to-[#c687a1] shadow-lg hover:scale-105 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-[#7a9f99] to-[#c687a1] shadow-lg hover:scale-105 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={logout}
                className="px-6 py-2 rounded-lg font-semibold text-white bg-red-500 shadow-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
              ) : (
                <HiMenu className={`w-6 h-6 ${scrolled ? "text-gray-700" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-indigo-700"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 rounded-md font-medium transition ${
                  scrolled
                    ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    : "text-white hover:bg-indigo-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#7a9f99] to-[#c687a1] hover:scale-105 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md font-medium text-white bg-gradient-to-r from-[#7a9f99] to-[#c687a1] hover:scale-105 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
