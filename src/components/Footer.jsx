import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { logo, github, linkedin } from "../assets";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div
      className={`${styles.paddingX} py-6 bg-[#12171D] max-w-7xl mx-auto relative z-0`}
    >
      <div className="flex mb-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[40px] h-[30px] mr-4 cursor-pointer"
          />
        </Link>
        <h3 className="font-playfair font-bold text-[18px] text-[#FEFEFE]">
          Maheen Ilyas
        </h3>
      </div>
      <div className="flex justify-center mb-12">
        <div className="bg-[#FEFEFE] py-4 px-8 rounded-[50px] max-w-[700px] w-full">
          <ul className="list-none flex justify-center flex-row">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#121117]" : "text-[#121117]"
                } mr-6 font-poppins font-semibold cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="quote mb-2 text-white text-[16px] font-playfair italic">
            "The answer to the ultimate question of life, the universe, and
            everything is 42."
          </p>
          <p className="text-white text-[14px] font-poppins">
            © {new Date().getFullYear()} Maheen Ilyas. All rights reserved.
          </p>
        </div>
        <div className="flex items-end justify-end">
          <div className="flex h-[40px] w-[40px] bg-[#FEFEFE] rounded-[10px] items-center justify-center mr-4">
            <a href="https://github.com/Maheen-Ilyas">
              <img src={github} className="h-[30px] w-[30px]"></img>
            </a>
          </div>
          <div className="flex h-[40px] w-[40px] bg-[#FEFEFE] rounded-[10px] items-center justify-center">
            <a href="https://www.linkedin.com/in/maheen-ilyas">
              <img src={linkedin} className="h-[30px] w-[30px]"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
