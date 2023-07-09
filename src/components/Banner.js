import React from "react";
import Image from "../assets/web-removebg-preview.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <section
      className="min-h-[100vh] lg:min-h-[77vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px] pb-3"
            >
              NEHA <span>KHAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  leading-[1"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[" Developer", 2000, " Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mt-2 max-w-lg mx-auto lg:mx-0 h3 text-gradient"
            >
              ❝ Crafting Exquisite User Journeys through Frontend Artistry. ❞
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max mb-12 mx-auto lg:mx-0 lg:text-left"
            >
              <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}>
               <button className="btn btn-lg ">About me</button>
            </Link>
             
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 text-center"
            >
              <a
                href="https://github.com/geekyneha"
                className="bg-blue-400 p-1 rounded-xl"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://github.com/geekyneha"
                className="bg-white text-black p-1 rounded-full"
              >
                <FaGithub size={30} />
              </a>
              <a href="https://www.instagram.com/slaynewh/">
                <FaInstagram size={40} className="gradient p-1 rounded-full" />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[350px] lg:max-w-[600px] "
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
