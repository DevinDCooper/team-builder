import React, { useState } from "react";

 function TeamForm(props) {
  const [user, setUser] = useState({ name: "", email: "" , role: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  
  const  handleSubmit = event => {
    console.log("submitting!");
    event.preventDefault(); 
    props.addNewPlayer(user); 
    setUser({ name: '', email: '' , role: ''});
  };
  return(
    <div className ="Team-Form">
        {console.log({ user })}
      
      <form onSubmit={event => handleSubmit(event)}>
    <label>
    Name:
    <input type="text" 
    placeholder="Enter Name here"
    id= "name"
    name="name"
    value={user.name}
      onChange={event => handleChange(event)}
    />
    </label>
    <label>
      Email:
      <input type="text"
      id= "email"
      placeholder="Enter Email here"
      name="email"
      value={user.email}
        onChange={event => handleChange(event)}
      />
    </label>
    <label>
      Role
      <input type="text"
      id= "role"
      placeholder="Enter Role here"
      name="role"
      value={user.role}
        onChange={event => handleChange(event)}
      />
    </label>
    <button >Submit!</button>
    </form>

    </div>
  );
 }  

  export default TeamForm;