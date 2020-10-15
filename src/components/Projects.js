import React from "react";
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"

const Projects = ({testNumber, photoArray, photoLinks, greyToggle, handleMouseEnter, handleMouseLeave}) => (
  <div>
    <h2>Projects</h2>
    <LEFT_BUTTON />
    <a href={photoLinks[testNumber[0]]}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={photoArray[testNumber[0]]}
        alt="position1"
        className="lazy-susan"
        id={`lazy-susan-1${greyToggle ? "-show" : ""}`}
      />
    </a>
    <a href={photoLinks[testNumber[1]]}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={photoArray[testNumber[1]]}
        alt="position2"
        className="lazy-susan"
        id={`lazy-susan-2${greyToggle ? "-show" : ""}`}
      />
    </a>
    <a href={photoLinks[testNumber[2]]}>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={photoArray[testNumber[2]]}
        alt="position3"
        className="lazy-susan"
        id={`lazy-susan-3${greyToggle ? "-show" : ""}`}
      />
    </a>
    <RIGHT_BUTTON />
  </div>
)

export default Projects;