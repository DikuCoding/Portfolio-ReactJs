import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './style.css'
import './script.js'
// import potrait from './images/potrait.png'

const Home = () => {
 const {text} =useTypewriter({
  words:['Developer','Photographer','Director'],
  loop:{},
 });
  return (
    <div className="infocontainer">
      <div className="myinfo">
        <div className="hello">Hello I am <span className="purple">Dikesh Khagi</span></div>
        <div className="secondHello">and I am a passionate </div>
        <div className="secondHello">web developer.
          <div className="secondHello"></div>
        </div>
        <span style={{fontWeight:'bold',color:'green'}}>{text}</span>
        <Cursor/>
   
        
        <div className="buttons">
          <a href="https://drive.google.com/uc?id=1vOcIiNgtYyNeai0H_7226hO-XI7j5jXP" target="_blank">
            <button className="btns">Download CV</button>
          </a>
        </div>
      </div>
      <div className="mypic">
        {/* <img src={potrait} alt="Dikesh Khagi" /> */}
      </div>
    </div>
  );
};

export default Home;
