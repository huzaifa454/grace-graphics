import { motion } from "framer-motion";
import { FaInstagram, FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center cursor-default"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-red-600 font-extrabold mb-4"
      >
        About Me
      </motion.h3>

      {/* Gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-red-600 to-red-600 rounded-full"
      ></motion.div>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-12 text-lg"
      >
        I create striking <span className="text-red-600">book covers</span>,
        bold <span className="text-red-600">graphics</span>, modern{" "}
        <span className="text-red-600">album art</span>, and clean{" "}
        <span className="text-red-600">web development</span> projects. <br />
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
          src="/asset/illustration.jpg"
          alt="Grace Designer"
          className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-red-600 shadow-lg"
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
          className="w-12 h-12 flex items-center justify-center rounded-full border border-red-600 text-red-600 text-2xl hover:scale-110 hover:bg-red-600 hover:text-black transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-red-600 text-red-600 text-2xl hover:scale-110 hover:bg-red-600 hover:text-black transition"
        >
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
