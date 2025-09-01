import React from "react";
import "./App.css";
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Eductaion from './components/Eductaion'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
     
    <Header />
    <Hero />
    <About/>
    <Eductaion />
    <Skills/>
    <Projects/>
    <Contact />
    <Resume/>
    <Footer/>
  
    </div>
  )
}

export default App
