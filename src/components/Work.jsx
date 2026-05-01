import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const rawProjects = [
  {
    title: "cover art",
    img: "/asset/cover1.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover2.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover3.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover4.png",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover5.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover6.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover7.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover8.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover9.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover10.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover11.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover12.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover13.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover14.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover15.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover16.png",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover17.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover18.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover19.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover20.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover21.jpeg",
    category: "Covers",
  },
  // Websites
  {
    title: "Website",
    img: "/asset/website1.jpg",
    category: "Websites",
  },
  {
    title: "Website",
    img: "/asset/website2.jpg",
    category: "Websites",
  },
  {
    title: "Website",
    img: "/asset/website3.jpg",
    category: "Websites",
  },
  {
    title: "Website",
    img: "/asset/website4.jpg",
    category: "Websites",
  },
  {
    title: "Website",
    img: "/asset/website4.jpg",
    category: "Websites",
  },
];

let coverCount = 0;
const projects = rawProjects.map((p) =>
  p.category === "Covers"
    ? { ...p, tag: ++coverCount <= 6 ? "Sold" : "Buy" }
    : p
);

const categories = [
  "All",
  "Covers",
  "Websites",
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="py-20 px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black cursor-default"
    >
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-purple-300 font-extrabold mb-4 text-center"
      >
        My Work
      </motion.h3>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
      ></motion.div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((cat) => (
        <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-4 py-2 rounded-lg transition-all duration-300
          ${
            selectedCategory === cat
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/30"
              : "border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white"
          }`}
      >
        {cat}
      </button>
      
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedImage(p.img)}
          >
            <div className="relative">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-80 object-cover"
              />
              {p.tag && (
                <span className={`absolute top-3 right-3 px-2 py-1 text-[10px] font-semibold rounded-full ${
                  p.tag === "Sold"
                    ? "bg-emerald-500 text-white"
                    : "bg-red-500 text-white"
                }`}>
                  {p.tag}
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent
">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400 transition-colors duration-300 z-60"
          >
            <FaTimes />
          </button>
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
