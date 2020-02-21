import React,  { useState }from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMate from './TeamMate';
import  TeamForm from './TeamForm';



function App() {
  const[teamMates, setTeamMates]= useState ([
  {
    id: 1,
    title: "Devin",
    email: "dev@gamil.com",
    body:
      "Web Dev "
  }
  ]);
  const addNewTeamMate = teamMate => {
    const newTeamMate = {
      id: teamMate,
      title: teamMate.title,
      email: teamMate.email,
      body: teamMate.body

    };

setTeamMates([...teamMates, newTeamMate]);

  }
return (
  <div className="App">
<h1>My Team</h1>
<TeamForm addNewTeamMate={addNewTeamMate}/>
<teamMate teamMate={teamMate} />


  </div>
);


} 

export default App;
