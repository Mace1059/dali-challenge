import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import nameChanger from "../../../Utility/NameChanger";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const uid = useContext(AuthContext);
  const [buttonText, setButtonText] = useState("Follow");

  function handleClick(text) {
    setButtonText(text);
  }
  return (
    <div className="profile-card">
      <div className="i_u">
        <img
          className="profile-card__image"
          src={
            props.picture !== null
              ? props.picture
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          }
          alt={props.name}
        />
        <div>
          <div>
            <h2 className="profile-card__username">{props.name}</h2>
            {nameChanger(props.name) !== uid ? (
              <button
                onClick={() => handleClick("Requested")}
                className="follow-button"
              >
                {buttonText}
              </button>
            ) : null}
          </div>
          <h3 className="profile-card__quote">{props.quote}</h3>
        </div>
      </div>

      <div className="line-1"></div>
      <div className="fact-grid">
        <h3>
          <span className="label">Graduation Year: </span> {props.year}
        </h3>
        <h3>
          <span className="label">Gender: </span>
          {props.gender}
        </h3>
        <h3>
          <span className="label">Major: </span>
          {props.major}
        </h3>
        <h3>
          <span className="label">Minor: </span>
          {props.minor}
        </h3>
        <h3>
          <span className="label">Birthday: </span>
          {props.birthday}
        </h3>
        <h3>
          <span className="label">Role: </span>
          {props.role}
        </h3>
        <h3>
          <span className="label">Home: </span>
          {props.home}
        </h3>
        <h3>
          <span className="label">Favorite Shoe: </span>
          {props.favoriteShoe}
        </h3>
        <h3>
          <span className="label">Favorite Artist: </span>
          {props.favoriteArtist}
        </h3>
        <h3>
          <span className="label">Favorite Color: </span>
          {props.favoriteColor}
        </h3>
        <h3>
          <span className="label">Phone Type: </span>
          {props.phoneType}
        </h3>
      </div>
    </div>
  );
};

export default ProfileCard;
