import React from "react";


function Auth() {

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
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


export default Auth;