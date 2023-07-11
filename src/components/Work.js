import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// import Img1 from "../assets/portfolio-img1.png";
// import Img2 from "../assets/portfolio-img2.png";
// import Img3 from "../assets/portfolio-img3.png";
import { PROJECTS } from "../utils/mock";
import { FaGithub, FaLink } from "react-icons/fa";
const Work = () => {
  return (
    <section  className="section mx-auto ">
      <div className="w-[80%] m-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:overflow-x-scroll">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:gap-y-12 mb-10 lg:mb-0 "
          >
            {/* text */}
            {/* <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur magni nisi fugiat at ratione quia, laboriosam nemo.
                Laborum.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div> */}

            {/* 1st */}

            <div className="w-60% flex flex-col lg:flex-row gap-10 justify-center items-center ">
              {PROJECTS.map((project) => {
                const { id, name, about, src } = project;
                return (
                  <div className="lg:w-[500px] w-[70%] bg-white ">
                    {" "}
                    {/* image */}
                    <div className="group relative overflow-hidden border-2 border-gradient ">
                      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                      {/* img */}
                      <img
                        className="group-hover:scale-125 transition-all duration-500 w-full h-[300px]"
                        src={src}
                        alt=""
                      />
                      {/* pretitle */}
                      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                        <span className="text-gradient">{name}</span>
                      </div>
                      {/* title */}
                      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                        <span className="text-3xl text-white">
                          Project Title
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="h3 text-gradient">{about}</div>
                      <div className="flex justify-between">
                        <button className="btn btn-sm">
                          <FaGithub size={30} />
                        </button>
                        <button className="btn btn-sm ">
                          <FaLink size={30} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
