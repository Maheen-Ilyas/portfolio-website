import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const firstRow = technologies.slice(0, 11);
  const secondRow = technologies.slice(11, 22);

  return (
    <div className={`${styles.paddingX} bg-[#FEFEFE] mx-auto max-w-7xl relative z-0`}>
      <motion.div variants={textVariant}>
        <p
          className={`${styles.sectionSubText} text-[#121117] pt-6 font-semibold font-poppins`}
        >
          WHAT I WORK WITH
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[#14161E] font-bold font-playfair`}
        >
          Technology Stack.
        </h2>
      </motion.div>
      <div className="flex mt-20 max-auto overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {firstRow.map((firstRowTechnology, firstRowIndex) => {
            return (
              <div key={firstRowIndex}>
                <img
                  src={firstRowTechnology.icon}
                  className="h-20 w-30 pr-10"
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {firstRow.map((firstRowTechnology, firstRowIndex) => {
            return (
              <div key={firstRowIndex}>
                <img
                  src={firstRowTechnology.icon}
                  className="h-20 w-30 pr-10"
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex h-12"></div>

      <div className="flex max-auto overflow-x-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {secondRow.map((secondRowTechnology, secondRowIndex) => {
            return (
              <div key={secondRowIndex}>
                <img
                  src={secondRowTechnology.icon}
                  className="h-20 w-30 pr-10"
                />
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 mb-20"
        >
          {secondRow.map((secondRowTechnology, secondRowIndex) => {
            return (
              <div key={secondRowIndex}>
                <img
                  src={secondRowTechnology.icon}
                  className="h-20 w-30 pr-10"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech stack");
