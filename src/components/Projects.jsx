import React from "react";
import { projects } from "../constants";
import { styles } from "../styles";
import { github } from "../assets";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const CardFlip = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * project.index, 0.75)}
      className="flip-card w-[320px] h-[300px] mb-10 rounded-[10px] perspective mx-4"
    >
      <div
        className="flip-card-inner transition-transform duration-700 hover:rotate-y-180"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="flip-card-front w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
        <div
          className="flip-card-back bg-[#FEFEFE] text-[#121117] p-4 rounded-[10px] w-full h-full shadow-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-[#121117] text-[20px] font-playfair font-semibold mb-2">
            {project.name}
          </h3>
          <p className="text-[14px] font-poppins mb-2">{project.description}</p>
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`flex-col items-start text-[12px] font-poppins font-medium mr-2 py-1 rounded-md ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
          <div className="flex justify-center mt-4">
            <a href={project.source_code_link} target="_blank" rel="noreferrer">
              <img
                src={github}
                alt="GitHub"
                className="w-[40px] h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      className={`${styles.paddingX} bg-[#12171D] max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant}>
        <p
          className={`${styles.sectionSubText} text-white-100 font-semibold font-poppins`}
        >
          WHAT I HAVE WORKED ON SO FAR
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[#FEFEFE] font-bold font-playfair`}
        >
          Projects.
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-wrap">
        {projects.map((project, index) => (
          <CardFlip key={index} project={{ ...project, index }} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
