import React from "react";
import { useParams } from "react-router-dom";

import ProfileCard from "./ProfileCard/ProfileCard";
import nameChanger from "../../Utility/NameChanger";

const Profile = (props) => {
  const userId = useParams().uid;
  const currentUser = props.users.find((p) => nameChanger(p.name) === userId);

  
  if (currentUser === undefined) {
    return <h2 className="center">User not found!</h2>;
  }
  return ( 
    <ProfileCard
      name={currentUser.name}
      picture={currentUser.picture}
      quote={currentUser.quote}
      year={currentUser.year}
      gender={currentUser.gender}
      major={currentUser.major}
      minor={currentUser.minor}
      birthday={currentUser.birthday}
      role={currentUser.role}
      home={currentUser.home}
      favoriteShoe={currentUser.favoriteShoe}
      favoriteArtist={currentUser.favoriteArtist}
      favoriteColor={currentUser.favoriteColor}
      phoneType={currentUser.phoneType}
    
    />
  );
};

export default Profile;
