import React from "react";
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"

const Projects = ({testNumber, photoArray}) => (
  <div>
    <h2>Projects</h2>
    <LEFT_BUTTON />
    {photoArray[testNumber[0]]}
    {photoArray[testNumber[1]]}
    {photoArray[testNumber[2]]}
    <RIGHT_BUTTON />
  </div>
)

export default Projects;


