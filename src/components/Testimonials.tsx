"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Yagazie Eguare, CEO Gazmadu",
    text: "Transformative, It would be great to see hustle & grind move from here into a CEO retreat.",
  },
  {
    name: "Chude Osiegbu, CEO Venco",
    text: "It was a fantastic experience. I enjoyed sharing experiences with other founders and learning from experienced founders who are building at a scale that I aspire to.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Autoplay every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          What People Are Saying
        </motion.h2>
        <p className="mt-2 text-gray-400 text-lg">
          Honest words from founders who’ve experienced it.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 bg-zinc-900/70 border-2 border-white/20 rounded-2xl shadow-xl"
          >
            {/* Sketchy border overlay */}
            <svg
              className="absolute -top-2 -left-2 w-full h-full pointer-events-none"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              <path
                d="M2,10 Q200,0 398,10 M398,10 Q390,100 398,190 M398,190 Q200,200 2,190 M2,190 Q10,100 2,10 Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="6 6"
                opacity="0.3"
              />
            </svg>

            <p className="relative text-gray-200 italic leading-relaxed mb-6 z-10">
              “{testimonials[index].text}”
            </p>
            <span className="relative block text-sm font-semibold text-white tracking-wide z-10">
              — {testimonials[index].name}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Dots navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
