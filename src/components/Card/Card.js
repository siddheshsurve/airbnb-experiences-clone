import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.coverImg} className="card--image" alt="katie's pic" />
      <div className="card--stats">
        <img src="./assets/star.png" className="card--star" alt="star pic" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
