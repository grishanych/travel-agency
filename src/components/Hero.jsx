import React from "react";
import homeimage from "../assets/hero.png";
import "../styles/Hero.scss"

export default function Hero() {
    return <section id="hero">
        <div className="background">
            <img src={homeimage} alt="" />
        </div>
        <div className="content">
            <div className="title">
                <h1>Travel to explore</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, earum fuga. Eligendi debitis rerum dicta officiis fugiat, velit aperiam omnis, quia esse delectus quidem voluptates iure deleniti harum id voluptas.
                </p>
            </div>
            <div className="search">
                <div className="container">
                    <label htmlFor="">Where you want to go?</label>
                    <input type="text" placeholder="Search your location" />
                </div>
                <div className="container">
                    <label htmlFor="">Check-in</label>
                    <input type="date" />
                </div>
                <div className="container">
                    <label htmlFor="">Check-out</label>
                    <input type="date" />
                </div>
                <button>Explore now</button>
            </div>
           

        </div>
       

    </section>
}