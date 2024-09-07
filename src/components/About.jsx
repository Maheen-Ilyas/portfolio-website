import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[240px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="pink-border-gradient p-[1px] rounded-[20px]"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#fef4f2] rounded-[20px] py-5 px-12 min-h-[240px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-30 h-30 object-contain" />
          <h3 className="font-playfair font-semibold text-[#c17e7a] text-[18px] text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-[#c47c84] mt-10 font-semibold font-roboto`}
        >
          INTRODUCTION
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[#bc8484] font-playfair`}
        >
          About.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "spring", 0.1, 1)}
        className="text-[17px] mt-4 text-[#c47c84] font-roboto font-normal max-w-3xl leading-[30px]"
      >
        As a passionate software engineer, I am constantly driven by the desire
        to solve complex problems using technology. With a strong foundation in
        AI/ML Algorithms and Mobile Application Development, I focus on creating
        innovative solutions that enhance user experiences and have a meaningful
        impact.
      </motion.p>
      <div className="mt-14 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
