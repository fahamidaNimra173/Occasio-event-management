// components/Navbar.jsx
"use client";
import { Original_Surfer } from "next/font/google";


import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
// import { useAuth } from "../hooks/useAuth";



const surfer = Original_Surfer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-surfer',
});


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    //   const { user, logout } = useAuth();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/all-events" },
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-colors ${surfer.className} duration-300 ${scrolled ? "bg-[#ecafaf] dark:bg-[#a46060] shadow-md" : "bg-transparent"
                }`}
        >
            <div className=" px-4 sm:px-6 lg:px-15">
                <div className="flex justify-between items-center h-16">
                    {/* Left: Logo */}
                    <div className="text-2xl font-bold text-white">
                        <Link href="/">Occasio</Link>
                    </div>

                    {/* Center (empty) */}
                    <div className="flex-1"></div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-gray-700 text-[20px] font-medium hover:text-indigo-600 transition ${scrolled ? "" : "text-white hover:text-indigo-300"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}


                        <button
                            className={`
                                relative px-8 py-2 rounded-lg font-semibold text-white
                                bg-gradient-to-r from-[#7a9f99] to-[#c687a1]
                                shadow-lg overflow-hidden transition-all duration-300
                                hover:scale-105 hover:shadow-xl
                                    `}
                        >
                            {/* Shiny effect */}
                            <span className="absolute top-0 left-0 w-0 h-full bg-white/20 rounded-lg transform -skew-x-12 transition-all duration-500 hover:w-full"></span>

                            <span className="relative">LogIn</span>
                        </button>


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
                    className={`md:hidden transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-indigo-700"
                        }`}
                >
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md font-medium transition ${scrolled ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600" : "text-white hover:bg-indigo-500"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}


                        <button
                            onClick={() => {
                                logout();
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md transition ${scrolled ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-white text-indigo-600 hover:bg-indigo-200"
                                }`}
                        >
                            LogIn
                        </button>

                    </div>
                </div>
            )}
        </nav>
    );
}
