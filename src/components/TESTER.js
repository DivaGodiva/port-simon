import React from "react";

const TESTER = ({testNumber, photoArray}) => (
  <h2>
    {photoArray[testNumber[0]]}
    {photoArray[testNumber[1]]}
    {photoArray[testNumber[2]]}
  </h2>
)

export default TESTER;


