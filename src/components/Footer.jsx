import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-[#0A0A0B] to-[#1E1E20] backdrop-blur-md border-t border-white/20 shadow-lg py-10 px-8 text-sm text-gray-400 space-y-12 ">
      <div className="flex flex-col gap-2 items-start">
        <div className="font-semibold text-gray-200">Hustle & Grind</div>
        <div className="flex space-x-4">
          <a
            href="https://x.com/hustlengrind_hh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://instagram.com/hustlengrind_hh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaInstagram />
          </a>
          <a href="" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="md:flex md:flex-row flex-col space-y-4 justify-between tracking-tight">
        <p className="text-gray-500 font-light">
          &copy; {new Date().getFullYear()} Hustle & Grind Hackerhouse. All
          rights reserved.
        </p>

        <span className="text-xs">
          <a
            href="https://roselinemo.com/"
            target="_blank"
            className="opacity-30 inline-block"
          >
            Made by <strong>roselinemo</strong> <br /> c/o
            <strong> nouevatech</strong>
          </a>
        </span>
      </div>
    </footer>
  );
}
