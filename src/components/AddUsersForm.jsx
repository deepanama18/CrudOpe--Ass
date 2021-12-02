import React, { useState } from "react";

const AddUsersForm = props => {
  const initialFormState = { id: null, name: "", username: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  //const [user, setUser] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    };
    
     const {name, username, email} = user

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!name || !username || !email) return;
        props.addUser(user);
        setUser(initialFormState);
        //setUser(user)
      }}
    >
      <label>Name </label>
          <input
              style={{margin:"10px"}} 
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
      /><br/>
      <label>Username </label>
          <input
              style={{margin:"10px"}} 
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
          /><br/>
     <label>Email  </label>
          <input
              style={{margin:"10px"}} 
        type="text"
        name="email"
        value={email}
        onChange={handleInputChange}
      /><br/>
          <button
              className="btn btn-danger"
              style={{ margin: "10px", marginBottom: "30px" }} >
              Add new user
          </button>
    </form>
  );
};

export default AddUsersForm;