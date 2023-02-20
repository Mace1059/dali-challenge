import React from "react";

import "./PostsCard.css";
const PostsCard = (props) => {
  return (
    <div className="post shadow">
      <div className="post-header">
        {props.creator}
      </div>
      <div className="image-box">
        <h3>{props.title}</h3>
        <img className="post-image" src={props.image}
          alt={props.username}></img>
        {props.caption}
      </div>
    </div>
  );
};

export default PostsCard;
