import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './style.css'

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_ul_li">

      <Link className="navbar_ul_li_a" to="/">{props.title}</Link>
      <Link className="navbar_ul_li_a" aria-current="page" to="/">Home</Link>
      <Link className="navbar_ul_li_a " aria-current="page" to="/intro">My-Intro</Link>
      {/* <Link className="navbar_ul_li_a" aria-current="page" to="/contact">Contact me</Link> */}
      <Link className="navbar_ul_li_a" aria-current="page" to="/page">Contact Me</Link>
        </li>
  
      </ul>
    </nav>
  )
}

export default Navbar
