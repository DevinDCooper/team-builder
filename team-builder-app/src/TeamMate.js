import React from "react";

const TeamMate = props => {
  return (
    <div className="TeamMate-list">
      {props.TeamMate.map( TeamMate => (
        <div className="TeamMate" key={TeamMate.id}>
          <h2>{TeamMate.title}</h2>
          <p>{TeamMate.email}</p>
          <p>{TeamMate.body}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMate;
