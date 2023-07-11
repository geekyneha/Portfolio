import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import aboutImage from "../assets/About-removebg-preview.png";
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div
      id="about"
      className="section"
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
            <h2 className="h2 text-accent">Who Am I?</h2>
            
            <h3 className="h3 mb-4 ">
           <span className="text-gradient">  Hello,</span><br/>
            I am Neha Khan! 
            </h3>
            <p className="mb-6">
            A dedicated and fervent frontend developer with a deep love for crafting exceptional digital experiences. With a curious mind and an unwavering attention to detail, I harmonize design aesthetics with the power of code to create stunning and user-centric websites and applications.
            
            </p>
            <div>
              <div className="flex gap-x-6 lg:gap-x-10 mb-12 mx-auto">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  months of <br />
                  Experience <br />
                  <span className="font-secondary text-gradient ">As a Frontend Developer<br /> Trainee At FunctionUp</span>

                </div>
              </div>
              <Link to="education"  smooth={true}
            spy={true}
           
            activeClass="active" ><div className="w-fit mx-auto"> <button className="btn btn-lg mx-auto">My Education</button></div>
            </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
