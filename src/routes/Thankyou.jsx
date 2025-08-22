import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-gray-600 to-indigo-800 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-10 max-w-md">
        <h1 className="text-2xl font-bold mb-8 text-white">Thank you!</h1>
        <p className="text-gray-300 mb-2">
          Your application has been successfully submitted.
        </p>
        <p className="text-gray-300 text-sm mb-6">
          Please keep an eye on your inbox for communications shortly.
        </p>
        <p className="text-gray-300 text-sm mb-6">
          Cheers, <br /> <strong>The Hustle & Grind team</strong>.
        </p>
        <span>
          <Link
            to="/"
            className="inline-block mt-4 px-10 py-3 bg-indigo-500 hover:bg-indigo-700 !text-gray-200 rounded-lg shadow-md font-semibold transition-all duration-200 text-sm"
          >
            Back to Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ThankYou;
