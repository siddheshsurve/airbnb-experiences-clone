import React from "react";
import "../index.css"
import Star from "../images/star.png"

export default function Card (props) {
    // let a = "."+props.img
    // console.log(a);
    return (
        <>
           <div className="card">
            {/* pro move */}
                <img src = {"."+props.img} className="card--pic"/>
                <div className="card--stats">
                    <img src={Star} className="card--star"/>
                    <span>{props.rating}</span>
                    <spans className="gray">({props.reviewCount}) • </spans>
                    <spans className="gray">{props.country}</spans>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
           </div>
        </>
    )
}