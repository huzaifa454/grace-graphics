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
];

export default function Testimonials() {
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

      {/* Staggered Grid Layout */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {/* 1st - Top Left, Full Height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="md:col-span-2 md:row-span-2"
          >
            <img
              src={testimonials[0].img}
              alt="testimonial"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition"
            />
          </motion.div>

          {/* 2nd - Top Right Small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <img
              src={testimonials[1].img}
              alt="testimonial"
              className="w-full h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition"
            />
          </motion.div>

          {/* 3rd - Top Right Small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <img
              src={testimonials[2].img}
              alt="testimonial"
              className="w-full h-40 object-cover rounded-lg shadow-lg hover:scale-105 transition"
            />
          </motion.div>

          {/* 4th - Bottom Right Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <img
              src={testimonials[3].img}
              alt="testimonial"
              className="w-full h-40 md:h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
