import React from "react";
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"

const Projects = ({testNumber, photoArray, photoLinks, greyToggle, handleMouseEnter, handleMouseLeave}) => (
  <div id="projects">
    <h2 className="projectsheader">Projects</h2>
    <div className="lazysusancontainer">
      <LEFT_BUTTON />
      <a href={photoLinks[testNumber[0]]}>
        <img
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          src={photoArray[testNumber[0]]}
          alt="position1"
          className={`lazy-susan${greyToggle[0] ? "-show" : ""}`}
        />
      </a>
      <a href={photoLinks[testNumber[1]]}>
        <img
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
          src={photoArray[testNumber[1]]}
          alt="position2"
          className={`lazy-susan${greyToggle[1] ? "-show" : ""}`}
        />
      </a>
      <a href={photoLinks[testNumber[2]]}>
        <img
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
          src={photoArray[testNumber[2]]}
          alt="position3"
          className={`lazy-susan${greyToggle[2] ? "-show" : ""}`}
        />
      </a>
      <RIGHT_BUTTON />
    </div>
  </div>
)

export default Projects;