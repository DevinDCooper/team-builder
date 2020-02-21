import React from "react";

const Players = props => {
  return (
    <div className="team-list">
      {props.players.map(Player => (
        <div className="team" key={Player.id}>
          <h2>{Player.name}</h2>
          <p>{Player.email}</p>
          <p>{Player.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;





