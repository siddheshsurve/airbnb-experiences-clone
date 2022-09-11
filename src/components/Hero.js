import React from "react";
import "../index.css"
import HeroPic from "../images/grid-pic.png"

export default function Hero () {
    return (
        <>
            <section className="hero">
                <img src={HeroPic} className="hero--pic" />
                <h1 className="hero--h1">Online Experiences</h1>
                <p className="hero--p">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </>
    )
}