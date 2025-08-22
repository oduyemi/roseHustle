import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", type: "section", path: "/#top" },
    { name: "About", type: "section", path: "/#about" },
    { name: "Gallery", type: "section", path: "/#gallery" },
    { name: "Apply", type: "section", path: "/#apply", cta: true },
  ];

  const renderLink = (link) => {
    const baseClasses =
      "relative px-3 py-2 rounded-lg transition-all duration-300 text-center";

    const glassyClasses =
      "hover:bg-white/20 hover:backdrop-blur-md hover:text-indigo-500 focus:outline-none focus:bg-white/20 focus:backdrop-blur-md focus:text-indigo-500";

    const ctaClasses =
      "bg-gradient-to-r from-indigo-500 to-indigo-700 !text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-indigo-800 focus:from-indigo-600 focus:to-indigo-800 px-10 rounded-xl";

    const finalClasses = link.cta
      ? `${baseClasses} ${ctaClasses}`
      : `${baseClasses} ${glassyClasses}`;

    if (link.type === "route") {
      return (
        <Link
          key={link.name}
          to={link.path}
          className={finalClasses}
          onClick={() => setOpen(false)}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <HashLink
        key={link.name}
        smooth
        to={link.path}
        className={finalClasses}
        onClick={() => setOpen(false)}
      >
        {link.name}
      </HashLink>
    );
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`flex items-center justify-between px-6 md:px-10 py-6 fixed w-full top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/30 backdrop-blur-md shadow-lg"
            : "bg-black/40 backdrop-blur-md text-white shadow-md border-b border-white/10"
        }`}
      >
        <Link
          to="/"
          className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
            scrolled
              ? "text-gray-900 hover:text-indigo-600"
              : "text-white hover:text-indigo-200"
          }`}
        >
          Hustle & Grind
        </Link>

        <nav
          className={`hidden md:flex space-x-4 text-sm transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <button
          className={`md:hidden text-3xl transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setOpen(true)}
        >
          <BiMenu />
        </button>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 z-50 shadow-lg transform transition-transform duration-300 ease-in-out backdrop-blur-lg ${
          scrolled ? "bg-white/30" : "bg-black/40"
        } ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className={`flex items-center justify-between px-6 py-6 border-b transition-colors duration-300 ${
            scrolled
              ? "border-gray-200 text-gray-800"
              : "border-gray-700 text-white"
          }`}
        >
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-3xl">
            ✕
          </button>
        </div>

        <nav
          className={`flex flex-col p-6 space-y-4 transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link) => {
            const baseClasses =
              "relative px-4 py-3 rounded-lg transition-all duration-300 text-center";

            const glassyClasses =
              "hover:bg-white/20 hover:backdrop-blur-md hover:text-indigo-500 focus:outline-none focus:bg-white/20 focus:backdrop-blur-md focus:text-indigo-500";

            const ctaClasses =
              "bg-indigo-500 !text-white hover:bg-indigo-600 hover:!text-white focus:bg-indigo-600 focus:!text-white";

            const finalClasses = link.cta
              ? `${baseClasses} ${ctaClasses}`
              : `${baseClasses} ${glassyClasses}`;

            if (link.type === "route") {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={finalClasses}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              );
            }

            return (
              <HashLink
                key={link.name}
                smooth
                to={link.path}
                className={finalClasses}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </HashLink>
            );
          })}
        </nav>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm"
        />
      )}
    </>
  );
}
