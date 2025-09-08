import { useState } from "react";

const projects = [
  {
    title: "cover art",
    img: "/asset/cover1.png",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover2.png",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover3.jpeg",
    category: "Covers",
  },
  {
    title: "cover art",
    img: "/asset/cover4.jpeg",
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
    img: "/asset/cover7.png",
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
    img: "/asset/cover10.png",
    category: "Covers",
  },
  {
    title: "Abstract Poster",
    img: "/asset/poster1.jpeg",
    category: "Posters",
  },
  {
    title: "Abstract Poster",
    img: "/asset/poster2.jpeg",
    category: "Posters",
  },
  {
    title: "Music Album Art",
    img: "/asset/music.jpeg",
    category: "Albums",
  },
  {
    title: "Art",
    img: "/asset/art1.jpg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art2.jpg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art3.jpg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art4.jpg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art5.jpeg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art6.jpeg",
    category: "Art",
  },
  {
    title: "Art",
    img: "/asset/art7.jpeg",
    category: "Art",
  },
  {
    title: "Ebook",
    img: "/asset/ebookcover.jpeg",
    category: "Ebook",
  },
  {
    title: "Ebook",
    img: "/asset/ebookcover1.jpeg",
    category: "Ebook",
  },
  {
    title: "Ebook",
    img: "/asset/ebookcover2.jpeg",
    category: "Ebook",
  },
  {
    title: "Ebook",
    img: "/asset/ebookcover3.jpeg",
    category: "Ebook",
  },
  {
    title: "Ebook",
    img: "/asset/ebookcover4.jpeg",
    category: "Ebook",
  },
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
    img: "/asset/website5.jpg",
    category: "Websites",
  },
];

const categories = [
  "All",
  "Covers",
  "Posters",
  "Albums",
  "Art",
  "Ebook",
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
      className="py-20 px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 cursor-default"
    >
      <h3 className="text-3xl text-red-600 mb-12 text-center font-extrabold">
        My Work
      </h3>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border border-red-600 rounded transition ${
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedImage(p.img)}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-red-600">{p.title}</h4>
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
