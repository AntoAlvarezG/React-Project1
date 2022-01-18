import React from "react";
import reactLogo from "../images/logo192.png"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={reactLogo} alt="react logo" />
            <h3 className="navbar-title"> ReactFacts </h3>
            <h4 className="navbar-proj"> React Course - Project 1 </h4>
        </nav>
    )
}