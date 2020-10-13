import '../styles/index.css';
import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Header from "./Header"
import Landing from "./Landing"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import TESTER from "../containers/TESTER_CONTAINER"
import RIGHT_BUTTON from "../containers/RIGHT_BUTTON_CONTAINER"
import LEFT_BUTTON from "../containers/LEFT_BUTTON CONTAINER"



const App = ({ store }) => (
  <Provider store={store}>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
    <TESTER /> 
    <LEFT_BUTTON /> <RIGHT_BUTTON /> 
  </Provider>
)

export default App;