import React from 'react';
import { motion } from "framer-motion";

const speakers = [
  {
    name: 'Kristin Watson',
    title: 'EXECUTIVE DIRECTOR',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/wfNVH0c8hXe4IVwB4fiJ1MguDJ0qFkuAc2Wd3dDW_Ms.jpg',
    alt: 'Portrait of Kristin Watson, Executive Director',
  },
  {
    name: 'Courtney Henry',
    title: 'GLOBAL DEVOPS LEAD',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/rY8QvZOOsv7obPnPGl6Lotle9_sEDiyJUBNUeVo1PVs.jpg',
    alt: 'Portrait of Courtney Henry, Global DevOps Lead',
  },
  {
    name: 'Marvin McKinney',
    title: 'DEVELOPER COMMUNITIES',
    imageUrl: 'https://storage.googleapis.com/a1aa/image/Y70MhOEoEWdE-YdDsbebljX5TOEKckgPS7e-GL3iGzM.jpg',
    alt: 'Portrait of Marvin McKinney, Developer Communities',
  },
  {
    name: 'Dianne Russell',
    title: 'CYBERSECURITY EXPERT',
    imageUrl: 'https://images.unsplash.com/photo-1601655781320-205e34c94eb1?q=80&w=1200&auto=format&fit=crop',
    alt: 'Portrait of Dianne Russell, Cybersecurity Expert',
  },
  {
    name: 'Jacob Jones',
    title: 'SOFTWARE ARCHITECT',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop',
    alt: 'Portrait of Jacob Jones, Software Architect',
  },
  {
    name: 'Esther Howard',
    title: 'AI RESEARCHER',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop',
    alt: 'Portrait of Esther Howard, AI Researcher',
  },
  {
    name: 'Ralph Edwards',
    title: 'PRODUCT MANAGER',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Portrait of Ralph Edwards, Product Manager',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Speakers = () => {
  return (
    <main 
      className="container mx-auto py-12 px-6 bg-black min-h-screen flex flex-col items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: "9px 9px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-white pb-8 text-center text-4xl font-bold uppercase"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Speakers
      </motion.h2>

      {/* Speaker Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="text-center bg-white shadow-lg p-5 w-[320px] h-[400px] flex flex-col items-center rounded-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="w-55 h-55 rounded-full overflow-hidden border-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={speaker.imageUrl}
                alt={speaker.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-gray-300">{speaker.name}</h3>
            <p className="text-gray-500">{speaker.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Speakers;
