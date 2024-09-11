import React from "react";
import { OrbCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-[#FEFEFE] text-5xl font-bold mb-2 font-playfair">
            MAHEEN ILYAS
          </h1>
          <p className="text-[#FEFEFE] text-[18px] font-normal font-poppins">
            AI/ML Enthusiast and Mobile Application Developer
          </p>
        </div>
      </div>
      <OrbCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#FEFEFE] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#FEFEFE]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
