
import './App.css';
import Progressbar from './Components/Progressbar';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Page from './Components/Page';
import Map from './Components/Map';
import Footer from './Components/Footer';

function App() {
  return (
 <>
 <BrowserRouter>
 <Progressbar/>
<Navbar title="Portfolio"/>
<div className="container my-1"/>
      <Routes>
      
      <Route exact path="/" element={<Home/>} >
        </Route>
        <Route exact path="/intro" element={<Intro/>}></Route>
        <Route exact path="/page" element={<Page/>}></Route>
        <Route exact path="/map" element={<Map/>}></Route>
      </Routes>
    <Footer/>
</BrowserRouter>  
 </>
  );
}

export default App;
