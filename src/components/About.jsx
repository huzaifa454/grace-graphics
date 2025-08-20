import { FaInstagram, FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-gray-900 text-center cursor-default"
    >
      {/* Heading */}
      <h3 className="text-3xl text-red-600 font-extrabold mb-4">About Me</h3>
      <div className="w-16 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-12">
        I create striking <span className="text-red-600">book covers</span>,
        bold <span className="text-red-600">graphics</span>, modern{" "}
        <span className="text-red-600">album art</span>, and clean{" "}
        <span className="text-red-600">web development</span> projects. My style
        blends simplicity with strong visuals, delivering designs that leave a
        lasting impression.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-12">
        <a
          href="https://www.instagram.com/grace_ashford_here/"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-red-600 text-red-600 text-2xl hover:bg-red-600 hover:text-black transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-red-600 text-red-600 text-2xl hover:bg-red-600 hover:text-black transition"
        >
          <FaDiscord />
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-6">
        <p className="text-gray-500 text-sm">
          © 2025 Grace Portfolio. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
