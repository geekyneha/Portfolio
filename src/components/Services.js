import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Bachelor of Computer Application       (BCA)  ",
    description:
      " Vidyabharti Mahvidyalya Amravati.",
    link: "2019 - 2022",
    marks:"83%"
  },
  {
    name: "Higher Secondary Certiificate               (HSC}",
    description:
      " Suffah Junior College Akola.",
    link: "2018- 2019",
    marks:"83%"

  },
  {
    name: "Secondary School Certificate                (SSC)    ",
    description:
      " Millat High School Akola.    ",
    link: "2016 - 2017",
    marks:"83%"
  },
];
const Services = () => {
  return (
    <section id="services" className="min-h-[85vh] lg:min-h-[76vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}

           className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-36">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              hic perspiciatis sapiente amet iusto ab.
            </h3>
            <button className="btn btn-sm">see my Work</button>
          </motion.div>
        
        {/* servies */}
            <motion.div
          variants={fadeIn('left',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}} className="flex-1">
              <div >
                {services.map((service, index) => {
                  const { name, description, link,marks } = service;
                  return (
                    <div
                      className="border-b border-white/20 h-[146px] mb-[38px] flex"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className="font-secondary leading-tight">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end">
                        <a href="#" className="btn w-14 h-14 mb-[42px] flex justify-center items-center">
                          
                                {marks}
                        </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
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

export default Services;
