import React from "react";
import "../index.css"
import HeroPic from "../images/grid-pic.png"

export default function Hero () {
    return (
        <>
            <div className="grid-pic-class">
                <img className="pic--hero" src={HeroPic} />
            </div>
            <h1 className="main-h1">Online Experiences</h1>
        </>
    )
}