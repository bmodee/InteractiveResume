import React from "react";
import LocationPicture from "../images/LocationColor.png"

export default function Tile({ title, place, date, description, location, locationlink, id }) {
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
        <a href={locationlink}>
                <img src={LocationPicture} alt='lp' width="50" height="50"/>
                <p>{location}</p>
            </a>
        </div>

        <div className="description">
            <p>{description}</p>
        </div>

      </div>
    </div>
  );
}

