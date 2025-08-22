export default function About() {
  return (
    <div
      id="about"
      className="backdrop-blur-md bg-indigo-200/60  border border-white/20 shadow-lg py-8 px-4 space-y-6 wrapper"
    >
      <h1 className="lg:text-4xl text-3xl font-bold mt-6 mb-10">About</h1>

      <div className="space-y-4 leading-relaxed mb-6">
        <p className="text-2xl font-semibold"> Hustle & Grind Hackerhouse:</p>
        <p className="text-xl sm:text-xl">
          Where Growth is Engineered, Not Left to Chance
        </p>

        <p className="text-lg mb-8">
          Scaling after revenue takes more than hustle. It demands clarity,
          guidance, and access to the right network. Hustle & Grind is where
          ambitious CEOs sharpen their strategy, refine product-market fit, and
          unlock sustainable growth.
        </p>

        <p className="text-lg">
          {" "}
          <strong>Our mission:</strong> <br /> To help CEOs hack strategy,
          product–market fit, and unlock exponential growth with confidence.
        </p>

        <p className="text-lg mb-8">
          We partner with industry leaders, ready to move past trial-and-error
          and build scalable systems with confidence. Hustle & Grind gives CEOs
          the tools, strategies, and network they need to grow with confidence.
        </p>

        <div className="text-lg mb-6">
          <p className="text-lg font-bold  mb-4">What you gain:</p>

          <ul className="list-disc list-inside mt-2">
            <li>Break growth barriers with practical support.</li>
            <li>Refine what works, double down on traction.</li>
            <li>Proven, sustainable growth playbooks.</li>
            <li>Strategy insights + investor network access.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
