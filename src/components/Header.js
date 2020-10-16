import React from "react";

const Header = () => (
    <div id="header">
      <img src="/assets/profile.png" className="bauble" alt="YAS" />
      <span className="title name">Simon Chae</span>
      <span className="title grey">Web Developer</span>
      <a className="links" href="https://www.w3schools.com">Contact</a>
      <span className="links grey"> | </span>
      <a className="links" href="https://www.w3schools.com">Projects</a>
      <span className="links grey"> | </span>
      <a className="links" href="https://www.w3schools.com">About</a>
    </div>
)

export default Header;