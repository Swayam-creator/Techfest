import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container bg-gray-900 text-white py-12 px-6">
      {/* Header Section */}
      <motion.div
        className="about-head text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-lg text-blue-400 font-semibold">ABOUT US</h2>
        <h1 className="text-4xl font-bold mt-2">WHO WE ARE</h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="about-content max-w-3xl mx-auto mt-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="text-gray-300">
          We are a passionate team dedicated to bringing cutting-edge technology
          events, conferences, and networking opportunities to tech enthusiasts
          worldwide. Our goal is to create a platform where innovation and ideas
          thrive.
        </p>
      </motion.div>

      {/* About Boxes */}
      <div className="about-boxes grid md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: "💡",
            title: "Innovation",
            desc: "We bring the latest trends in technology to inspire the next generation of innovators.",
          },
          {
            icon: "🌍",
            title: "Global Reach",
            desc: "Our events connect people from around the world, fostering collaboration and learning.",
          },
          {
            icon: "📢",
            title: "Networking",
            desc: "Meet industry leaders, developers, and entrepreneurs at our exclusive tech events.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="about-box bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3 + index * 0.2, // Staggered delay
            }}
          >
            <div className="text-4xl">{item.icon}</div>
            <h1 className="text-xl font-semibold mt-4">{item.title}</h1>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
