import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    name: "Wattpad Essentials",
    price: "$150 AUD",
    details: "High-impact digital designs specifically for web-novel platforms.",
    includes: [
      "High-resolution Front Cover (JPG/PNG)",
      "3D Digital Mockup for social media",
      "2 rounds of revisions"
    ],
    bestFor: "Digital-only authors on Wattpad, Royal Road, or Inkitt."
  },
  {
    name: "Complete E-Book & Print Wrap",
    price: "$300 AUD",
    details: "Professional full-wrap designs ready for global publishing platforms.",
    includes: [
      "Full Wrap (Front, Back, and Spine)",
      "Print-Ready PDF (KDP/IngramSpark optimized)",
      "E-book optimized files",
      "Source File access"
    ],
    bestFor: "Self-published authors looking for a premium physical and digital presence."
  },
  {
    name: "Author Brand Portfolio (Web)",
    price: "$1000 AUD",
    details: "A dedicated custom-built landing page to showcase your literary work.",
    includes: [
      "Fully Responsive",
      "Book Gallery",
      "About the Author section",
      "Newsletter/Contact Form integration",
      "Basic SEO"
    ],
    bestFor: "Established authors building a professional personal brand."
  },
  {
    name: "Buy Any Premade Only",
    price: "$200 AUD",
    details: "Grab any stunning pre-designed cover for your upcoming release.",
    includes: [
      "Complete Paperback Full-Wrap",
      "High-Quality E-Book Cover",
      "Print-Ready & Web Optimized files"
    ],
    bestFor: "Authors looking for a quick, budget-friendly premium launch."
  }
];

const initialFormData = {
  name: "",
  email: "",
  bookTitle: "",
  selectedPackage: "",
  message: ""
};

export default function Packages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (pkgName) => {
    setSelectedPackage(pkgName);
    setFormData({ ...initialFormData, selectedPackage: pkgName });
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitting(false);
    setIsSubmitted(false);
    setFormData(initialFormData);
    setSelectedPackage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwbJ47rMbdyqUWStWxotU7_uzGyvCtE1JKp1P8786AAmdXzhbMRmIqgO3FX-tBONPe8/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, selectedPackage })
        }
      );

      setFormData(initialFormData);
      setSelectedPackage("");
      setIsSubmitted(true);

      window.setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setIsSubmitting(false);
        setFormData(initialFormData);
        setSelectedPackage("");
      }, 2000);
    } catch (error) {
      console.error("Inquiry submission failed", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="packages"
      className="py-20 px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black cursor-default"
    >
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-purple-300 font-extrabold mb-4 text-center"
      >
        Packages
      </motion.h3>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-black border border-gray-800 rounded-lg p-6 hover:scale-105 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
              <p className="text-purple-400 font-semibold mb-4">Starting from: {pkg.price}</p>
              <p className="text-gray-300 mb-4">{pkg.details}</p>
              <div className="mb-4">
                <h5 className="text-purple-300 font-semibold mb-2">Includes:</h5>
                <ul className="text-gray-400 text-sm list-disc list-inside">
                  {pkg.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-purple-300 font-semibold mb-2">Best for:</h5>
                <p className="text-gray-400 text-sm">{pkg.bestFor}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => openModal(pkg.name)}
              className="mt-6 w-full px-4 py-2 border border-purple-500 text-purple-400 rounded-lg 
                         hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 
                         hover:to-pink-500 hover:text-white 
                         transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 
                         text-center block font-semibold"
            >
              {pkg.name === "Buy Any Premade Only" ? "Buy Premade" : "Book a Slot"}
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg rounded-2xl border border-purple-500/30 bg-black/95 p-6 shadow-2xl shadow-purple-900/40"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Inquiry Form</h4>
                  <p className="text-sm text-gray-400">{selectedPackage}</p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-2xl text-purple-300 transition hover:text-white"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {isSubmitted ? (
                <div className="rounded-lg border border-purple-500/30 bg-purple-900/20 p-5 text-center">
                  <p className="text-lg font-semibold text-white">Thank you! I will get back to you soon.</p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-4 rounded-lg border border-purple-500 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-purple-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-950/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-purple-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-950/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-purple-300">Book Title / Genre</label>
                    <input
                      type="text"
                      name="bookTitle"
                      value={formData.bookTitle}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-950/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-purple-300">Selected Package</label>
                    <input
                      type="text"
                      name="selectedPackage"
                      value={selectedPackage}
                      readOnly
                      className="w-full rounded-lg border border-gray-700 bg-gray-900/80 px-3 py-2 text-sm text-gray-300 outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-purple-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-950/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-purple-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-purple-500 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}