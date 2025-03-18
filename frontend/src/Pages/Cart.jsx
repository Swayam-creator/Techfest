import React from "react";
import { motion } from "framer-motion";

const registeredEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "March 25, 2025",
    image: "https://cdn.pixabay.com/photo/2024/07/14/13/45/ai-generated-8894579_1280.jpg",
  },
  {
    id: 2,
    name: "AI & ML Summit",
    date: "April 10, 2025",
    image: "https://tryolabs.com/assets/blog/machine-learning-deep-learning-conferences/machine-learning-conferences-542593dd92.png",
  },
  {
    id: 3,
    name: "Web3 Developer Meetup",
    date: "May 5, 2025",
    image: "https://dqjlivgajd8bb.cloudfront.net/d5zf5yi9lbbvzydvtu5hcuo5f1tw",
  },
  {
    id: 4,
    name: "Cybersecurity Expo 2025",
    date: "June 20, 2025",
    image: "https://images.fonearena.com/blog/wp-content/uploads/2024/07/Cyber-Sec-India-Expo-2025.jpg",
  },
  {
    id: 5,
    name: "Blockchain World Forum",
    date: "July 15, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkMZyN5wLfOEOcNnZ7FLvtue1K7QgIt8mKw&s",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900">
      {/* Header */}
      <motion.h2
        className="text-4xl font-extrabold uppercase mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Events Registered
      </motion.h2>

      {/* Events List */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {registeredEvents.length > 0 ? (
          registeredEvents.map((event) => (
            <motion.div
              key={event.id}
              className="relative w-80 h-72 rounded-xl shadow-lg overflow-hidden transition-all duration-300 bg-white"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
              }}
            >
              <motion.img
                src={event.image}
                alt={event.name}
                className="w-full h-44 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="p-4 bg-gray-800 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold">{event.name}</h3>
                <p className="text-sm text-gray-300">{event.date}</p>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-lg text-gray-400 text-center col-span-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            No events registered yet. Sign up for upcoming events!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;
