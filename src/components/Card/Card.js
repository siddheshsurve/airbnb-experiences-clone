import React from "react";
import Star from "../../assets/star.png";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.coverImg} className="card--image" alt="katie's pic" />
      <div className="card--stats">
        <img src={Star} className="card--star" alt="star pic" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount} • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props}</span> / person
      </p>
    </div>
  );
}

export default Card;
