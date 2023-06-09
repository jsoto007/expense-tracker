import React, { useState } from "react";


function Login( { onLogin } ) {
const [loginData, setLoginData] = useState({
  userName: "", 
  password: ""
});


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST", 
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    .then((resp) => resp.json())
    .then((user) => onLogin(user));
  }

  function handleChange(e) {
    const key = e.target.id
    setLoginData({
      ...loginData, 
      [key]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={loginData.userName}
          id="userName"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>

    </div>
  )
}


export default Login;