import React from "react";

const Team = (props) => {
  return (
    <>
      <div className="team-info">
        <div className="info-img">
          <img src={props.img} className="profile-img" alt="team" />
        </div>
        <div className="info-text">Lorem ipsum dolor </div>
        <div className="info-text-name">{props.name}</div>
        <div className="info-text">Lorem ipsum dolor </div>
      </div>
    </>
  );
};

export default Team;
