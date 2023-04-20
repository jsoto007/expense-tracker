import React, { useState } from "react";


function Auth( { onLogin } ) {

  const [newUser, setNewUser] = useState({
    username: "", 
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/user", {
      method: "POST", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
    .then((resp) => resp.json())
    .then((user) => onLogin(user));
  }

  function handleChange(e) {
    const key = e.target.id
    setNewUser({
      ...newUser, 
      [key]: e.target.value
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={newUser.username}
          id="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )

}


export default Auth;