import '../styles/index.css';
import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Header from "./Header"
import Landing from "./Landing"
import About from "./About"
import Projects from "../containers/Projects_Container"
import Contact from "./Contact"




const App = ({ store }) => (
  <Provider store={store}>
    <Header />
    <Landing />
    <About />
    <Projects /> 
    <Contact />
  </Provider>
)

export default App;