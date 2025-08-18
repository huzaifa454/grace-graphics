import { useState } from "react";

const projects = [
  {
    title: "Dark Fantasy Cover",
    img: "https://source.unsplash.com/random/400x600/?book,cover",
    category: "Covers",
  },
  {
    title: "Abstract Poster",
    img: "https://source.unsplash.com/random/400x600/?poster,art",
    category: "Posters",
  },
  {
    title: "Music Album Art",
    img: "https://source.unsplash.com/random/400x600/?album,cover",
    category: "Albums",
  },
  {
    title: "Creative Graphic",
    img: "https://source.unsplash.com/random/400x600/?graphic,design",
    category: "Posters",
  },
  {
    title: "Minimal Design",
    img: "https://source.unsplash.com/random/400x600/?minimal,art",
    category: "Covers",
  },
  {
    title: "Modern Book Cover",
    img: "https://source.unsplash.com/random/400x600/?novel,cover",
    category: "Covers",
  },
];

const categories = ["All", "Covers", "Posters", "Albums"];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 px-8 bg-black cursor-default">
      <h3 className="text-3xl font-bold text-red-600 mb-12 text-center font-extrabold">
        My Work
      </h3>

      <div className="flex justify-center mb-8 space-x-4">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((p, i) => (
          <div
            key={i}
            className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:scale-105 transition"
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
    </section>
  );
}
