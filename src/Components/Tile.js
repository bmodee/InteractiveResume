import React from "react";

export default function Tile({ title, place, date, description, location, id }) {
  return (
    <div className={Tile}>
      <div className="tile-content" id={id}>
        <div className="title">
            <h3>{title}</h3>
        </div>

        <div className="place">
            <h3>{place}</h3>
        </div>

        <div className="date">
            <p>{date}</p>
        </div>

        <div className="location">
            <p>{location}</p>
        </div>

        <div className="description">
            <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

