import style from "./projects.module.css";
import { PROJECTS } from "../../utils/mock.js";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-scroll";
const Projects = () => {
  return (
    <>
       
      <section
        className="min-h-[100vh] lg:min-h-[100vh] flex flex-col justify-center items-center"
        id="work"
      >
         <h2 className="h2 text-accent text-center ">Projects</h2>
        
        <div className={style["All-projects"]}>
          {PROJECTS.map((project) => {
            const { id, name, about, catagory, src, githubLink, deployedLink } =
              project;
            return (
              <div key={id} className={style.card}>
                <div className="group relative overflow-hidden border-2 border-gradient ">
                  <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

                  {/* img */}
                  <img
                    className="group-hover:scale-125 transition-all duration-500 w-full h-fit object-scale-down "
                    src={src}
                    alt=""
                  />
                  {/* pretitle */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                    <span className="text-gradient text-3xl">{name}</span>
                  </div>
                  {/* title */}
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                    <span className=" text-white">{catagory}</span>
                  </div>
                </div>

                <div className=" text-black max-h-[200px] p-5 overflow-y-scroll scrollbar-none text-xl  ">
                  {about}
                </div>
                <div className="flex justify-between p-4 ">
                  <a
                    href={githubLink}
                    className="bg-black text-white p-3 rounded-full mx-20"
                  >
                    <FaGithub size={30} />
                  </a>
                  <a
                    href={deployedLink}
                    className="bg-black text-white p-3  rounded-full mx-20"
                  >
                    <FaLink size={30} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
       
        
    
      </section>
    </>
  );
};

export default Projects;
