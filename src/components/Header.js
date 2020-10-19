import React from "react";

const Header = () => (
    <div className="header">
      <img src="/assets/profile.png" className="bauble" alt="YAS" />
      <span className="title">Simon Chae</span>
      <span className="title grey">Web Developer</span>
      <a className="links" href="#contact">Contact</a>
      <span className="links grey"> | </span>
      <a className="links" href="#projects">Projects</a>
      <span className="links grey"> | </span>
      <a className="links" href="#about">About</a>
    </div>
)

export default Header;