import { useRef, useState } from "react";
import PaystackPop from "@paystack/inline-js";

const ATTEMPT_FORM = "https://formspree.io/f/mkgzdblq";
const PAID_FORM = "https://formspree.io/f/mzzvngle";

function Apply() {
  const formRef = useRef();
  const [paystackOpen, setPaystackOpen] = useState(false);

  const handlePayment = (formData) => {
    setPaystackOpen(true);

    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "pk_test_bb394877a5f98f73861cf33ddb4b3ef079fa33ac",
      email: formData.get("email"),
      amount: 300000 * 100,
      currency: "NGN",
      onSuccess(transaction) {
        // ✅ Log successful payment to Apply inbox
        fetch(PAID_FORM, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }).then(() => {
          formRef.current.reset();
          window.location.href = `${window.location.origin}/thankyou`;
        });
      },
      onCancel() {
        alert("Payment cancelled.");
      },
    });

    setPaystackOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // ✅ Log attempt to Dropoff inbox immediately
    fetch(ATTEMPT_FORM, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    // Continue to Paystack
    handlePayment(formData);
  };

  return (
    <div
      id="apply"
      className="min-h-screen py-16 bg-gradient-to-br from-indigo-100 via-white to-indigo-200 relative"
    >
      {paystackOpen && (
        <div className="fixed inset-0 z-50 bg-white/20 backdrop-blur-md flex items-center justify-center">
          <div className="text-indigo-700 font-semibold text-lg">
            Opening secure payment popup...
          </div>
        </div>
      )}

      <section className="max-w-3xl mx-auto px-6">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-10 space-y-6">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-gray-800">
            Apply now - Hustle & Grind Hackerhouse
          </h2>
          <p className="text-sm text-indigo-400 hover:text-indigo-700 hover:underline inline transition-colors duration-200">
            <a
              href="https://x.com/adewaleyusuf_"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Adewale Yusuf
            </a>
          </p>
          <p className="text-gray-700 mt-4">
            Thank you for your interest in Hustle & Grind. We’re selecting
            <strong> high-value, post-revenue businesses in Africa </strong>
            ready to scale, secure funding, and sharpen product-market fit.
          </p>

          <p>
            <strong>Location:</strong> Lekki, Lagos. 2 days on-site weekly.{" "}
            <br /> <strong>Dates:</strong> October, 2025.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Program Cost: $300</strong>
          </p>

          <p className="text-gray-700 mt-2">
            <strong>Please Note: </strong>Payment is required during
            application. <br />
            If selected, you will receive an email with acceptance confirmation.
          </p>

          <p className="text-gray-700 mt-2 text-sm">
            <strong>Contact Us</strong> 📞 +234 816 523 0522 | 🌐
            hustle.adewaleyusuf.com
          </p>
          <p className="text-gray-600 mt-8 mb-12">
            Please complete the form below to apply for the next cohort.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 text-sm"
          >
            {/* CEO Information */}
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
              CEO Information
            </h3>

            <div className="space-y-3">
              <label className="block text-gray-600">Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Daniel Ahmed"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="you@business.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 xxx"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">Company Name *</label>
              <input
                type="text"
                name="companyName"
                placeholder="Your Company"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">
                Website / Social Link *
              </label>
              <input
                type="url"
                name="website"
                placeholder="www.example.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Business Snapshot */}
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mt-20">
              Business Snapshot
            </h3>

            <div className="space-y-3">
              <label className="block text-gray-600">Industry *</label>
              <input
                type="text"
                name="industry"
                placeholder="Tech, Fintech, etc."
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">
                Your solution and the problem it solves *
              </label>
              <textarea
                name="solution"
                rows="3"
                placeholder="Describe your solution..."
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>

              <label className="block text-gray-600">How you monetize *</label>
              <input
                type="text"
                name="monetization"
                placeholder="Subscription, Sales, Service..."
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">
                Revenue Last Year (USD) *
              </label>
              <input
                type="number"
                name="revenueYear"
                placeholder="300000"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">
                Revenue Last 3 Months (USD) *
              </label>
              <input
                type="number"
                name="revenue3Months"
                placeholder="30000"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />

              <label className="block text-gray-600">
                Top 3 goals for joining this Hackerhouse *
              </label>
              <textarea
                name="goals"
                rows="3"
                placeholder="1. Goal 1, 2. Goal 2, 3. Goal 3"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>

              <label className="block text-gray-600">
                Currently raising or planning to raise funding? *
              </label>
              <select
                name="funding"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label className="block text-gray-600">
                How did you hear about Hustle & Grind? *
              </label>
              <input
                type="text"
                name="referral"
                placeholder="Referral, Social Media, etc."
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Confirmation */}
            <label className="flex items-center mt-12 mb-6 text-gray-600">
              <input
                type="checkbox"
                name="confirmation"
                required
                className="mr-2 w-4 h-4 accent-blue-500"
              />
              By submitting this form, I confirm all information provided is
              accurate. *
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-900 text-white py-3 mb-6 rounded-lg font-semibold shadow-md transition-all duration-200"
            >
              Pay & Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Apply;
