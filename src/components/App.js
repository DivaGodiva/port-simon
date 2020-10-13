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
import TESTER_INCREMENT from "../containers/TESTER_INCREMENT_CONTAINER"
import TESTER_DECREMENT from "../containers/TESTER_DECREMENT_CONTAINER"



const App = ({ store }) => (
  <Provider store={store}>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
    <TESTER /> 
    <TESTER_DECREMENT /> <TESTER_INCREMENT /> 
  </Provider>
)

export default App;