"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "./Conponent/Navbar";
import "./Style.css";
import Home from "./Conponent/Home";
import About from "./Conponent/About";
import Skilles from "./Conponent/Skilles";
import Projects from "./Conponent/Projects";
import Contacts from "./Conponent/Contacts";
const page = () => {
  return (
    <div className="main relative ">
      <div className="">
        <div className="home" id="home">
          <Home />
        </div>
        <div className="home" id="about">
          <About />
        </div>
        <div className="home" id="skills">
          <Skilles />
        </div>
        {/* <div className='home' id='expreance'><Exprience/></div> */}
        <div className="home" id="projects">
          <Projects />
        </div>
        <div className="home" id="contacts">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default page;
