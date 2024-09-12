import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#12171D] py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-4">
        <p className="text-white text-[16px] font-playfair italic">
          "The answer to the ultimate question of life, the universe, and
          everything is 42."
        </p>
        <p className="text-white text-[14px] font-poppins">
          © {new Date().getFullYear()} Maheen Ilyas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
