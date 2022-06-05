import React from "react";
import logo from "../assets/logo.png";
import "../styles/Nav.scss"



export default function Navbar() {
    return (<>
        <nav className="nav">
            <div className="brand">
                <div className="container">
                    <img src={logo} alt="" />
                    Travelo
                </div>
                <div className="toggle"></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#recommend">Places</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
            <button>Connect</button>

        </nav>
    </>
    )
}
