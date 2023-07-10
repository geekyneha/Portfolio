import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { PROJECTS } from "../utils/mock";
import { FaGithub, FaLink } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="min-h-[85vh] lg:min-h-[100vh] mx-auto flex justify-center items-center">
      <div className="lg:w-[80%] w-[100%] m-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:overflow-x-scroll scrollbar-none">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:gap-y-12 mb-10 lg:mb-0 lg:static relative left-20"
          >
            <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center">
              {PROJECTS.map((project) => {
                const { id, name, about, catagory, src, githubLink, deployedLink } = project;
                return (
                  <div className="lg:w-[500px] w-[80vw] gradient rounded-lg overflow-hidden" key={id}>
                    <div className="group relative">
                      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                      <img
                        className="group-hover:scale-125 transition-all duration-500 w-full h-[300px]"
                        src={src}
                        alt=""
                      />
                      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                        <span className="text-gradient text-3xl">{name}</span>
                      </div>
                      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                        <span className="text-white">{catagory}</span>
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="text-black max-h-[100px] overflow-y-auto">
                        {about}
                      </div>
                      <div className="flex justify-between">
                        <a
                          href={githubLink}
                          className="btn text-white p-3 rounded-full"
                        >
                          <FaGithub size={30} />
                        </a>
                        <a
                          href={deployedLink}
                          className="btn text-white p-3 rounded-full"
                        >
                          <FaLink size={30} />
                        </a>
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
