import "@/styles/globals.css";

import { FaDribbble, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { FaRocket } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/White/DTF-Primary-Logo-White.png"; // Update logo file if you have a ProTech Innovation logo

export default function Footer() {
  return (
    <footer className="w-full font-['SatoshiVariable'] flex flex-col items-center justify-center bg-black z-10 pt-16 pb-12 px-6">
      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl mx-auto grid grid-cols-1 gap-8 items-center text-white">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col items-left">
            <div className="flex items-center gap-2">
              <span className="w-32 sm:w-40 md:w-48 font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg select-none">
                ProTech Innovation
              </span>
              <FaRocket className="text-pink-500 text-2xl md:text-4xl ml-2" aria-label="Creative Innovation Icon" />
            </div>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
            Where Development Meets Technology for Tomorrow’s Solutions.
            </p>
          </div>

          <nav className="flex flex-wrap justify-start sm:justify-center md:justify-start gap-4 sm:gap-6 text-sm md:text-base text-gray-400 font-medium">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/#services" className="hover:text-white">Services</Link>
          <Link href="/#projects" className="hover:text-white">Projects</Link>
          <Link href="/#milestone" className="hover:text-white">Milestone</Link>
          <Link href="/#customer-review" className="hover:text-white">Testimonials</Link>
            <Link href="/#members" className="hover:text-white">Our Team</Link>
            <Link href="/#contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="w-full md:w-5/6 lg:w-4/5 xl:w-5xl 2xl:w-7xl flex flex-col md:flex-row items-center justify-between pt-10 border-t-[1px] border-gray-200 text-sm mt-8 px-2">
  <span className="text-center md:text-left text-gray-400">
  © {new Date().getFullYear()} ProTech Innovation. All rights reserved.
</span>

          <div className="flex justify-center space-x-4 mt-4 md:mt-0 ">
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaXTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaGithub /></a>
          <a href="#" className="text-gray-400 hover:text-white text-xl"><FaDribbble /></a>
        </div>
      </div>
    </footer>
  );
}
