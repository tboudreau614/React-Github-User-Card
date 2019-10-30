import React from "react";

const UserCard = props => {
  console.log("card rendered");
  return (
    <div className="userCard">
        <h1 className="userName">{props.name}</h1>
      <img className="userImage" src={props.image} alt="Github user profile picture" />
      <div className="userInfo">
        <p className="userBio">{props.bio}</p>
        <p>Location:{props.location}</p>
        <p>Followers:{props.follower}</p>
        <p>Following:{props.following}</p>
      </div>
    </div>
  );
};

export default UserCard;