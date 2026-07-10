import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    img: "/asset/testimonials1.jpeg",
    id: 1,
  },
  {
    img: "/asset/testimonials2.jpeg",
    id: 2,
  },
  {
    img: "/asset/testimonials3.jpeg",
    id: 3,
  },
  {
    img: "/asset/testimonials4.jpeg",
    id: 4,
  },
  {
    img: "/asset/Testimonials5.jpeg",
    id: 5,
  },
  {
    img: "/asset/Testimonials6.jpeg",
    id: 6,
  },
  {
    img: "/asset/Testimonials7.jpeg",
    id: 7,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);

  return (
    <section
      id="testimonials"
      className="py-20 px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black cursor-default"
    >
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-purple-300 font-extrabold mb-4 text-center"
      >
        Client Testimonials
      </motion.h3>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="w-32 h-1 mx-auto mb-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full"
      ></motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl bg-slate-950/20 shadow-2xl shadow-black/20 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={testimonial.img}
                alt={`testimonial ${testimonial.id}`}
                className="w-full h-72 sm:h-80 md:h-64 xl:h-72 object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-white transition hover:bg-slate-700"
              aria-label="Close testimonial preview"
            >
              <span className="text-2xl leading-none">×</span>
            </button>
            <img
              src={testimonials[activeIndex].img}
              alt={`testimonial ${testimonials[activeIndex].id}`}
              className="h-[75vh] w-full object-contain bg-black"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
