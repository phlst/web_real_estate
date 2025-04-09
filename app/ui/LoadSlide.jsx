"use client";
import { easeInOut, motion } from "framer-motion";

function LoadSlide() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-blue-500 z-50"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 0.8, duration: 0.8, ease: easeInOut }}
    >
      <div className="max-w-2xl text-center text-white">
        <motion.h1
          className="text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: easeInOut }}
        >
          Finding Your
        </motion.h1>
        <motion.h1
          className="text-7xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: easeInOut }}
        >
          Dream Home
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default LoadSlide;
