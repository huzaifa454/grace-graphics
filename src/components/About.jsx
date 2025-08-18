import { FaInstagram, FaDiscord } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-8 bg-black text-center cursor-default"
    >
      <div className="py-12 text-center border-t border-gray-800">
      <h3 className="text-3xl font-bold text-red-600 mb-12 text-center font-extrabold">
        About Me
      </h3>
      </div>

      <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed mb-16">
        I create striking <span className="text-red-600">book covers</span>,
        bold <span className="text-red-600">graphics</span>, and modern{" "}
        <span className="text-red-600">album art</span>. My style blends
        simplicity with strong visuals, delivering designs that leave a lasting
        impression.
      </p>

      <footer className="py-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 mb-4">© 2025 Grace Portfolio</p>
        <div className="flex justify-center space-x-6 text-red-600 text-2xl">
          <a
            href="https://www.instagram.com/grace_ashford_here/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaDiscord />
          </a>
        </div>
      </footer>
    </section>
  );
}
