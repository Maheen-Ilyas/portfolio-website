import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas, StarsCanvas } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_7hqe0pj",
        "template_d161yse",
        formRef.current,
        "Z80HlcF6rSmgblRca"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong! Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative">
      <div className="absolute inset-0 z-[15]">
        <StarsCanvas />
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#12171D] p-16 rounded-2xl relative"
      >
        <p
          className={`${styles.sectionSubText} text-white-100 font-semibold font-poppins`}
        >
          GET IN TOUCH
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[#FEFEFE] font-bold font-playfair`}
        >
          Contact.
        </h2>
        <form
          ref={formRef}
          onSubmit={submit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#FEFEFE] font-playfair font-medium text-[18px] mb-4">
              Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              className="bg-[#FEFEFE] z-[20] py-4 px-6 rounded-[4px] text-[#12111D] outlined-none border-[#12111D] placeholder:text-[#12111D] text-[14px] font-poppins border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#FEFEFE] font-playfair font-medium text-[18px] mb-4">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange}
              className="bg-[#FEFEFE] z-[20] py-4 px-6 rounded-[4px] text-[#12111D] outlined-none border-[#12111D] placeholder:text-[#12111D] text-[14px] font-poppins border-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#FEFEFE] font-playfair font-medium text-[18px] mb-4">
              Message
            </span>
            <textarea
              rows={7}
              name="message"
              placeholder="What's your message?"
              value={form.message}
              onChange={handleChange}
              className="scrollbar-thin scrollbar-webkit bg-[#FEFEFE] z-[20] mb-4 py-4 px-6 rounded-[4px] text-[#12111D] font-poppins outlined-none placeholder:text-[#12111D] placeholder:text-[14px] placeholder:font-poppins placeholder:border-none"
            />
          </label>
          <button
            type="submit"
            className="z-[20] py-3 px-8 outline-none w-fit font-playfair font-bold shadow-lg rounded-[10px] bg-[#FEFEFE] text-[#12111D] cursor-pointer hover:bg-[#12171D] hover:text-[#FEFEFE]"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative z-[10]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
