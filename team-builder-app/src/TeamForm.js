import React, { useState } from "react";

const TeamForm = props => {

const [teamMate, setTeamMate] = useState({
title: "",
body: ""
});

const handleChange = event => {
console.log("event", event.target.value);
console.log("name", event.target.name);


setTeamMate({...teamMate, [event.target.name]: event.target.value });

console.log("teamMate", teamMate);

const submitForm = event => {
    console.log("submitting!");
    event.preventDefault(); 
    props.addNewTeamMate(teamMate); 
    setTeamMate({ title: "", body: "", eamil: ""}); 
  };

}
return (
    
<form onSubmit= {submitForm}>
<label htmlFor="title">Name</label>
<input
type="text"
placeholder= "enter name"
id="title"
name="title"
value={teamMate.title}
onChange={handleChange}
/>
<label htmlFor="email">email</label>
<input
type="text"
placeholder="enter email"
id="email"
name="email"
value={teamMate.email}
onChange={handleChange}
/>

<label htmlFor="roll">Team roll</label>
<textarea
id="teamMate"
name="body"
placeholder="Add your Team roll"
value={teamMate.body}
onChange={handleChange}
/>
<button type="submit">Add to Team </button>
</form>
);
};


export default TeamForm;