import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import AboutMe from "./Components/NavbarComponents/AboutMe";
import ProjectList from "./Components/NavbarComponents/ProjectList";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Routes>
        <Route path="/Yinson-Tso-Portfolio" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectList />} />
      </Routes>
    </div>
  );
}

export default App;
