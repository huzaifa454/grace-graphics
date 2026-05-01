import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Work", to: "work", color: "hover:text-purple-400" },
    { label: "Packages", to: "packages", color: "hover:text-indigo-400" },
    { label: "Testimonials", to: "testimonials", color: "hover:text-cyan-400" },
    { label: "About", to: "about", color: "hover:text-pink-400" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 
    bg-black/60 backdrop-blur-md 
    fixed top-0 w-full z-50 
    border-b border-purple-900/40 cursor-default">

      <h1 className="text-xl font-bold 
      bg-gradient-to-r from-purple-400 to-pink-400 
      bg-clip-text text-transparent">
        Grace Designer
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              smooth
              duration={500}
              className={`cursor-pointer ${item.color}
              transition-all duration-300 font-semibold`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button - Mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-purple-400 text-2xl hover:text-pink-400 transition-colors"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="absolute top-14 right-0 w-full bg-black/95 backdrop-blur-md border-b border-purple-900/40 md:hidden"
        >
          <ul className="flex flex-col space-y-4 px-8 py-6 text-gray-300">
            {navItems.map((item, index) => (
              <motion.li
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className={`cursor-pointer block ${item.color}
                  transition-all duration-300 font-semibold text-lg`}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
