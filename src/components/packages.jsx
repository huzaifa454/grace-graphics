import { motion } from "framer-motion";

const packages = [
  {
    name: "Wattpad Essentials",
    price: "$150",
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
    price: "$200",
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
    price: "$500",
    details: "A dedicated custom-built landing page to showcase your literary work.",
    includes: [
      "Fully Responsive",
      "Book Gallery",
      "About the Author section",
      "Newsletter/Contact Form integration",
      "Basic SEO"
    ],
    bestFor: "Established authors building a professional personal brand."
  }
];

export default function Packages() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <a
              href="https://www.instagram.com/grace_ashford_here/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full px-4 py-2 border border-purple-500 text-purple-400 rounded-lg 
                         hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 
                         hover:to-pink-500 hover:text-white 
                         transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 
                         text-center block font-semibold"
            >
              Book a Slot
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}