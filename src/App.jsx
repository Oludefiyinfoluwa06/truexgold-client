import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SplashVid from './pages/SplashVid';
import TapPage from './pages/TapPage';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<SplashVid />} />
            <Route path="/landing" element = {<LandingPage />} />
            <Route path='/tap' element = {< TapPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App