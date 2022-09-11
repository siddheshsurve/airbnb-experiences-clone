import React from "react";
import "../index.css"
import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card () {
    return (
        <>
           <div className="card">
                <img src={Katie} className="card--pic"/>
                <div className="card--stats">
                    <img src={Star} className="card--star"/>
                    <spans>5.0</spans>
                    <spans className="gray">(6) • </spans>
                    <spans className="gray">USA</spans>
                </div>
                <p>Life Lessons with Katie zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
           </div>
        </>
    )
}