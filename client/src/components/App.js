import React, { useState } from 'react';
import Login from './Login'
import Auth from './Auth'


function App() {
  const [currentUser, setCurrentUser] = useState("");

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE", 
    })
    .then(() => setCurrentUser());
  }

  return (
    <div className="App">
      <button onClick={handleLogout}>Logout</button>
      <Login onLogin={setCurrentUser}/>
      <Auth onLogin={setCurrentUser}/>
    This is the app
    </div>
  );
}

export default App;
