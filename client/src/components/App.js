import React, { useState } from 'react';
import Login from './Login'


function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <div className="App">
      <Login onLogin={setCurrentUser}/>
    This is the app
    </div>
  );
}

export default App;
