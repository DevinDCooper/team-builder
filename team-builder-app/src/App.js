import React, { useState } from "react";
import './App.css';
import TeamForm from './TeamForm';
import TeamMate from './TeamMate';


function App() {

  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Devin",
      email: "DevinDcooper@gmail.com",
        role:" Web Dev"
    }
  ]);

  const addNewPlayer = player => {
    const newPlayer = {
      id: player.name,
      name: player.name,
      email: player.email,
      role: player.role

    };
    setPlayers([...players, newPlayer])

  
  };



  return(

    <div className= "App">
      <h1>My Team</h1>
    <TeamForm  addNewPlayer={addNewPlayer}/>
    <TeamMate players={players}/>
    </div>
  )



} 

export default App;
