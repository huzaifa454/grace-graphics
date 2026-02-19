import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 
    bg-black/60 backdrop-blur-md 
    fixed top-0 w-full z-50 
    border-b border-purple-900/40 cursor-default">

      <h1 className="text-2xl font-bold 
      bg-gradient-to-r from-purple-400 to-pink-400 
      bg-clip-text text-transparent">
        Grace Designer
      </h1>

      <ul className="flex space-x-8 text-gray-300">
        <li>
          <Link
            to="work"
            smooth
            duration={500}
            className="cursor-pointer hover:text-purple-400 
            transition-all duration-300 font-semibold"
          >
            Work
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-pink-400 
            transition-all duration-300 font-semibold"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
