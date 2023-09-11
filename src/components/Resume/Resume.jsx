import React from "react";
import "./Resume.css";
import resume from "./Resume_Neha_Khan (14).pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume_Neha_Khan.pdf";
    link.click();
  };

  return (
    <>
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
          <div className="container mx-auto h-fit"></div>
          <iframe
            loading="lazy"
            className="myIframeCustomClass"
            src="https://www.canva.com/design/DAFuKUVVHXU/view?embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
