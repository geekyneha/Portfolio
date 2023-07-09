import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import aboutImage from "../assets/About-removebg-preview.png";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      id="about"
      className="min-h-[85vh] lg:h-[80vh] mt-1 flex justify-center items-center"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-fit justify-center">
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top "
          >
            <img
              src={aboutImage}
              alt=""
              width={400}
              className=" relative top-10 "
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I'm a frontend developer Lorem ipsum dolor sit.
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              aut deserunt vel minima tempore maiores!
            </p>
            <div>
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Exp
                </div>
              </div>
              <button className="btn btn-lg">Contact</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
