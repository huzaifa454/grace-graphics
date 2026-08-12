import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-center cursor-default"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-purple-300 font-extrabold mb-4"
      >
        About Me
      </motion.h3>

      {/* Gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
      ></motion.div>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-white leading-relaxed mb-12 text-lg"
      >
        <span className="text-purple-400">Dark fantasy enthusiast. Atmospheric artist. All round creative.</span> Grace is an Australian based freelance cover designer who has worked with <span className="text-purple-400">USA bestselling authors</span>. She specialises in striking book covers, photo manipulation, and custom visual branding, creating immersive designs that tell a story at a glance. Her work blends mood, elegance, and bold creativity, with a passion for honest, boundary pushing ideas. From <span className="text-purple-400">book covers</span> and <span className="text-purple-400">branding</span> to <span className="text-purple-400">social media graphics</span> and <span className="text-purple-400">web design</span>, Grace creates visuals that leave a lasting impression.
      </motion.p>

      {/* Optional profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <img
          src="/asset/logo.jpeg"
          alt="Grace Designer"
          className="mx-auto w-60 h-60 object-cover rounded-full 
             border-4 border-purple-500 shadow-lg 
             transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center space-x-6 mb-12"
      >
        <a
          href="https://www.instagram.com/grace_ashford_here/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300  hover:shadow-lg hover:shadow-purple-500/30">
          <FaInstagram />
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-6">
        <p className="text-gray-500 text-sm">
          © 2025 Grace Portfolio. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
