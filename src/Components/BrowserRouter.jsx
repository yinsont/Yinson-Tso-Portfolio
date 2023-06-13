import Home from './Components/Home';
import AboutMe from './Components/NavbarComponents/AboutMe';
import ProjectList from './Components/NavbarComponents/ProjectList';
import React from 'react'
import {Route, Routes} from 'react-router-dom'

export default function BrowserRouter(){
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/projects' element={<ProjectList/>}/>
      </Routes>
    )
}