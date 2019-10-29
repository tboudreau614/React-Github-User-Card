import React from "react";

const FollowerCards = props => {
  console.log("card rendered");
  return (
    <div className="followerCard">
      <img className="followerImage" src={props.image} alt="Github profile picture" />
      <h3>{props.name}</h3>
    </div>
  );
};

export default FollowerCards;