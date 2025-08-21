import { Link } from "react-scroll";
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden cursor-default">
      {/* Animated gradient glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[800px] h-[800px] bg-red-600/20 rounded-full blur-3xl animate-pulse absolute top-[-200px] left-[-200px]" />
        <div className="w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse absolute bottom-[-150px] right-[-150px]" />
      </div>

      {/* Spinning circular text */}
      <div className="absolute top-20 right-10">
        <svg
          className="text-gray-500 animate-spin-slow"
          viewBox="0 0 100 100"
          width="180"
          height="180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="11.75" className="fill-red-600">
            <textPath href="#circle">
              Grace Designer - Grace Designer - Grace Designer
            </textPath>
          </text>
        </svg>
      </div>

      <div className="absolute bottom-10 left-10">
        <svg
          className="text-gray-500 animate-spin-slow"
          viewBox="0 0 100 100"
          width="180"
          height="180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle2"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="11.75" className="fill-red-600">
            <textPath href="#circle2">
              Grace Designer - Grace Designer - Grace Designer
            </textPath>
          </text>
        </svg>
      </div>

      {/* Animated Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-red-600"
      >
        Grace Designer
      </motion.h2>

      {/* Animated tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 max-w-xl text-gray-300"
      >
        Book covers • Album art • Posters • Graphic Design • Web Development
      </motion.p>

      {/* Animated button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="mt-8 px-8 py-3 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-black transition cursor-pointer inline-block"
        >
          View My Work
        </Link>
      </motion.div>

      {/* Social Icons with hover animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex justify-center space-x-6 text-red-600 text-2xl mt-6"
      >
        <a
          href="https://www.instagram.com/grace_ashford_here/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition transform hover:scale-110"
        >
          <FaDiscord />
        </a>
      </motion.div>
    </section>
  );
}
