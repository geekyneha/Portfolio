import React from "react";
import "./Resume.css";
import resume from './Resume.jpg'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Neha_Khan_Resume_.pdf"; // From public folder
    link.download = "Resume_Neha_Khan.pdf";
    link.click();
  };

  return (
    <div
      className="ResumeContainer min-h-[100vh] lg:min-h-[100vh] lg:mt-[400px] h-fit"
      id="resume"
    >
      <div className="flex flex-row justify-between">
        <h2 className="h2 text-accent text-center self-center relative top-4">
          Resume
        </h2>
        <button className="btn btn-sm self-end" onClick={handleDownload}>
          Download
        </button>
      </div>

      <div className="myCustomClass">
        <div className="container mx-auto ">
          <img
            src={resume} // Use lowercase and match the exact name
            alt="Neha Khan Resume"
            className="w-full rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
