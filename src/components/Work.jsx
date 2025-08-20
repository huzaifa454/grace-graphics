import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data (You can move this to data/projects.js) ---
const projects = [
  { title: "Cover Art", img: "/src/assets/cover1.jpeg", category: "Covers" },
  { title: "Cover Art", img: "/src/assets/cover2.jpeg", category: "Covers" },
  { title: "Cover Art", img: "/src/assets/cover3.jpeg", category: "Covers" },
  { title: "Cover Art", img: "/src/assets/cover4.jpeg", category: "Covers" },
  { title: "Cover Art", img: "/src/assets/cover5.jpeg", category: "Covers" },
  { title: "Cover Art", img: "/src/assets/cover6.jpeg", category: "Covers" },
  { title: "Abstract Poster", img: "/src/assets/poster1.jpeg", category: "Posters" },
  { title: "Abstract Poster", img: "/src/assets/poster2.jpeg", category: "Posters" },
  { title: "Music Album Art", img: "/src/assets/music.jpeg", category: "Albums" },
  { title: "Creative Graphic", img: "/src/assets/graphics.jpeg", category: "Art" },
  { title: "Creative Graphic", img: "/src/assets/graphics1.jpeg", category: "Art" },
  { title: "Creative Graphic", img: "/src/assets/graphics3.jpeg", category: "Art" },
];

const categories = ["All", "Covers", "Posters", "Albums", "Art"];

// --- Component ---
export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="work" className="py-20 px-8 bg-black cursor-default">
      <h3 className="text-3xl text-red-600 mb-12 text-center font-extrabold">
        My Work
      </h3>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border border-red-600 rounded-lg font-medium transition ${
              selectedCategory === cat
                ? "bg-red-600 text-black"
                : "text-red-600 hover:bg-red-600 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow hover:shadow-red-600/30 hover:scale-105 transition cursor-pointer"
              onClick={() => setSelectedImage(p.img)}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-red-600">{p.title}</h4>
                <p className="text-gray-400 text-sm">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full Preview"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
