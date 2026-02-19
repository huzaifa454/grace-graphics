import { motion } from "framer-motion";
import { FaInstagram, FaDiscord } from "react-icons/fa";

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
        I create striking <span className="text-purple-400">book covers</span>,
        bold <span className="text-purple-400">graphics</span>, modern{" "}
        <span className="text-purple-400">album art</span>, and clean{" "}
        <span className="text-purple-400">web development</span> projects. <br />
        My style blends simplicity with strong visuals, delivering designs that
        leave a lasting impression.
      </motion.p>

      {/* Optional profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <img
  src="/asset/illustration.png"
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
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500 text-purple-400 text-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
          <FaDiscord />
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
