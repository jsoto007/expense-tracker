import React, { useState } from "react";


function Login( { onLogin } ) {
const [loginData, setLoginData] = useState({
  username: "", 
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
          name="username"
          value={loginData.username}
          id="username"
          onChange={handleChange}
          placeholder="Username"
        />
      </form>

    </div>
  )
}


export default Login;