import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from "motion/react" 

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const [splineLoading, setSplineLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false); 
  const path = '../../assets/scene.splinecode';

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowSpline(true);
      setSplineLoading(false);
    }, 3000); 

   
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-gray-950 h-screen w-full relative">
      {/* Spline Component (Background 3D scene) with Suspense */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Suspense fallback={<div className="flex justify-center items-center w-full h-full">Loading...</div>}>
          {showSpline && <Spline scene={path} />}
        </Suspense>
      </div>

      {/* Text Container with Framer Motion Animations */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        
        {/* Welcome Text with Box Shadow */}
        <motion.h1
          className="font-Gilroy sm:text-[12vw] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
            shadow-lg drop-shadow-2xl py-4 px-8 rounded-xl"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut' }} 
        >
          Welcome
        </motion.h1>

        {/* TechUtsav Text with Gradient */}
        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-lg drop-shadow-lg"
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} 
        >
          TechUtsav
        </motion.h2>
      </div>
      
    </main>
  );
};

export default Home;
