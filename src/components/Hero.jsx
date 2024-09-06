import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { OrbCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#918]">Maheen Ilyas</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 font-normal`}
          >
            I'm a software engineer with a passion for Mobile
            <br className="sm:block hidden" />
            Application Development and AI/ML. I focus on
            <br className="sm:block hidden" />
            building user-friendly applications can make a
            <br className="sm:block hidden" />
            significant impact.
          </p>
        </div>
      </div>
      <OrbCanvas />
    </section>
  );
};

export default Hero;
