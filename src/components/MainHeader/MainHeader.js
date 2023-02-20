import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../pages/context/auth-context";
import './MainHeader.css'


const MainHeader = () => {
  
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  } 
  const uid = useContext(AuthContext);

  return (
    <header className="main-header">
        <h2>BookFace</h2>
    <ul>
      <button className="nav-button" onClick={() => navigateTo('/people')}>Discover People!<span className="fa-regular fa-house"></span></button>
      <button className="nav-button" onClick={() => navigateTo(`/posts/${uid}`)}><span>Posts</span></button>
      <button className="nav-button" onClick={() => navigateTo(`/profile/${uid}`)}>Profile</button>
    </ul>
    </header>
  );
};

export default MainHeader;
