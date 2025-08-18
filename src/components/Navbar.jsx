import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black fixed top-0 w-full z-50 border-b border-gray-800 cursor-default">
      <h1 className="text-2xl font-bold text-red-600">Grace Designer</h1>
      <ul className="flex space-x-6 text-gray-400">
        <li>
          <Link
            to="work"
            smooth
            duration={500}
            className="cursor-pointer hover:text-red-600 font-bold"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth
            duration={500}
            className="cursor-pointer hover:text-red-600 font-bold"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
