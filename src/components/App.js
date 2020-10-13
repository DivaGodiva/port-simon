import '../styles/index.css';
import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Header from "./Header"
import Landing from "./Landing"
import About from "./About"
import Contact from "./Contact"
import TESTER from "../containers/TESTER_CONTAINER"



const App = ({ store }) => (
  <Provider store={store}>
    <Header />
    <Landing />
    <About />
    <TESTER /> 
    <Contact />
  </Provider>
)

export default App;