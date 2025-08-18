import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen bg-black cursor-default">
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
      {/* Main heading */}
      <h2 className="text-5xl md:text-7xl font-extrabold text-red-600">
        Grace Designer
      </h2>
      <p className="mt-4 max-w-xl text-gray-400">
        Book covers • Album art • Posters • Minimal graphic design
      </p>

      {/* Smooth scroll button */}
      <Link
        to="work"
        smooth={true}
        duration={500}
        className="mt-8 px-8 py-3 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-black transition cursor-pointer"
      >
        View My Work
      </Link>
    </section>
  );
}
