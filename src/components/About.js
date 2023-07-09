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
      className="min-h-[100vh] lg:min-h-[100vh] mt-1 flex justify-center items-center"
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
            Hello, world!<br/>
            I am Neha Khan—a fervent frontend developer
            </h3>
            <p className="mb-6">
            As a frontend developer, my expertise lies in HTML, CSS, JavaScript, and React. With a solid foundation in these technologies, I possess the skills to transform static designs into dynamic and engaging web interfaces. My continuous learning mindset keeps me updated with the latest trends, enabling me to bring fresh perspectives and innovative ideas to every project I undertake.
            </p>
            <div>
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  months of <br />
                  Exp <br />
                  <span className="font-secondary text-gradient">As a Frontend Developer Trainee At FunctionUp</span>

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
