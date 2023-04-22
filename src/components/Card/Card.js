import React from "react";
import "./Card.css";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {/* conditonal rendering */}
      {badgeText && <div className="cards--badge">SOLD OUT</div>}

      <img src={props.coverImg} className="card--image" alt="katie's pic" />

      <div className="card--stats">
        <img src="./assets/star.png" className="card--star" alt="star pic" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>

      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
