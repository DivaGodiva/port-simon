import React from "react";
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"

const Projects = ({testNumber, photoArray}) => (
  <div>
    <h2>Projects</h2>
    <LEFT_BUTTON />
    <img src={photoArray[testNumber[0]]} alt="position1" class="lazy-susan"/>
    <img src={photoArray[testNumber[1]]} alt="position2" class="lazy-susan"/>
    <img src={photoArray[testNumber[2]]} alt="position3" class="lazy-susan"/>
    <RIGHT_BUTTON />
  </div>
)

export default Projects;