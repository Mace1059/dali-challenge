import React from "react";
import { useNavigate } from "react-router-dom";
import nameChanger from "../../../Utility/NameChanger";

import "./PeopleCard.css";

const PeopleCard = (props) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  console.log(props.name)
  return (
    <button
      className="people-card"
      onClick={
        props.type === "friend"
          ? () => navigateTo(`/posts/${nameChanger(props.name)}`)
          : () => navigateTo(`/profile/${nameChanger(props.name)}`)
      }
    >
      <div className="i_u">
        <img
          className="people-card__image"
          src={
            props.picture !== null
              ? props.picture
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          }
          alt={props.name}
        />
        <div>
          <h2 className="people-card__username">{props.name}</h2>
        </div>
      </div>
    </button>
  );
};

export default PeopleCard;
