import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiMicrosoftacademic } from "react-icons/si";
import { MdTipsAndUpdates } from "react-icons/md";

import { RiContactsBookLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 lg:w-full w-[100vw] overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px]mx-auto px-5 flex lg:justify-between gap-5 items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center "
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="education"
            activeClass="active"
            smooth={true}
            spy={true}
           
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <SiMicrosoftacademic />
          </Link>

          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
     
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <MdTipsAndUpdates />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsPersonWorkspace />
          </Link>

          <Link
            to="resume"
            activeClass="active"
            smooth={true}
            spy={true}
       
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <CgFileDocument />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
        
            className="cursor-pointer lg:w-[60px]  lg:h-[60px] w-[50px] h-[50px] flex items-center justify-center"
          >
            <RiContactsBookLine />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
