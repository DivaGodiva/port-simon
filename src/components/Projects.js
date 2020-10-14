import React from "react";
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"

const Projects = ({testNumber, photoArray, photoLinks}) => (
  <div>
    <h2>Projects</h2>
    <LEFT_BUTTON />
    <a href={photoLinks[testNumber[0]]}><img src={photoArray[testNumber[0]]} alt="position1" className="lazy-susan"/></a>
    <a href={photoLinks[testNumber[1]]}><img src={photoArray[testNumber[1]]} alt="position2" className="lazy-susan"/></a>
    <a href={photoLinks[testNumber[2]]}><img src={photoArray[testNumber[2]]} alt="position3" className="lazy-susan"/></a>
    <RIGHT_BUTTON />
  </div>
)

export default Projects;