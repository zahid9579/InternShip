import React from "react";
import { motion } from "framer-motion";
import './BouncingLoader.css'

const BouncingLoader = () => {
  return (
    <div className="Loader">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="bolls"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2, 
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
