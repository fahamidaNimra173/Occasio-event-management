// components/Footer.jsx
import Link from "next/link";
import { Josefin_Sans } from "next/font/google";


const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
});
export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Book Events", href: "/events" },
  ];

  return (
    <footer className={`bg-[#ecafaf] ${josefin.className} dark:bg-[#a46060] text-white mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Side */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl font-extrabold ">Occasio</h2>
          <p className="mt-2 ">Chittagong, Lalkhan Bazar</p>
        </div>

        {/* Right Side Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Occasio. All rights reserved.
      </div>
    </footer>
  );
}
