import React from "react";

const Contact = () => (
    <div id="contact">
      <h2 className="contactheading">Contact</h2>
      <h3 className="name nameo namae"> Simon S. Chae </h3>
      <a className="name nameo" href="https://www.w3schools.com">s13chae@gmail.com</a>
      <div className="name wack">
        <a className="contactlinks" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
        <a className="contactlinks" href="https://github.com/DivaGodiva" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        <a className="contactlinks" href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
      </div>
      <span id="copyright">Created by me © Godivanbuns</span>
    </div>
)

export default Contact;