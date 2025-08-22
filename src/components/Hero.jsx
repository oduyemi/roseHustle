// import { HashLink } from "react-router-hash-link";

// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="min-h-screen bg-gradient-to-br from-black via-[#0A0A0B] to-[#1E1E20] flex items-center justify-center px-6 py-24"
//     >
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center mt-20">
//         {/* Left Column: Text & Button */}
//         <div className="space-y-6">
//           <h1 className="text-5xl md:text-6xl font-semibold text-white text-left">
//             Scale smarter. Grow faster.
//           </h1>
//           <div className="max-w-sm">
//             <p className="text-gray-200 text-lg md:text-xl text-left text-wrap">
//               Hustle & Grind Hackerhouse partners with post-revenue CEOs to
//               sharpen strategy, refine product-market fit, and unlock growth.
//             </p>
//           </div>

//           <HashLink
//             smooth
//             to="/#apply"
//             className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 !text-white font-semibold rounded-lg shadow-md transition-colors duration-300"
//           >
//             Apply for the Next Cohort
//           </HashLink>
//         </div>

//         {/* Right Column: Video */}
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.youtube.com/embed/QIrgDPQtE9c"
//             title="Cohort Announcement"
//             className="w-full h-64 md:h-96"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }

import { HashLink } from "react-router-hash-link";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen bg-gradient-to-br from-black via-[#0A0A0B] to-[#1E1E20] flex items-center justify-center md:wrapper px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center mt-20">
        {/* Left Column: Text & Button */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-left drop-shadow-md">
            Hackerhouse <br /> for Relentless CEOs
          </h1>
          <div className="max-w-md">
            <p className="text-gray-300 text-xl md:text-2xl text-left mb-2">
              Two days a week. Infinite growth.
            </p>
            <p className="text-gray-300 text-lg md:text-xl text-left">
              Hustle & Grind Hackerhouse partners with post-revenue CEOs ready
              to scale smarter and dominate markets.
            </p>
          </div>

          <HashLink
            smooth
            to="/#apply"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#5A5FFF] to-[#6ECFF6] hover:opacity-90 !text-white font-semibold rounded-2xl shadow-lg backdrop-blur-md transition-all duration-300"
          >
            Apply for the Next Cohort
          </HashLink>
        </div>

        {/* Right Column: Video */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md">
          <iframe
            src="https://www.youtube.com/embed/QIrgDPQtE9c"
            title="Cohort Announcement"
            className="w-full h-64 md:h-96"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
