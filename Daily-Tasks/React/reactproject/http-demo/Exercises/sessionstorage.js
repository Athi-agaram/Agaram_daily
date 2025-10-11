import React, { useState, useEffect } from "react";

function SessionLogin() {
  const [username, setUsername] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  // Load username from session storage on mount
  useEffect(() => {
    const user = sessionStorage.getItem("username");
    if (user) setLoggedInUser(user);
  }, []);

  const handleLogin = () => {
    if (!username) return;
    sessionStorage.setItem("username", username);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setLoggedInUser("");
    setUsername("");
  };

  return (
    <div>
      <h2>Session Storage Login</h2>
      {!loggedInUser ? (
        <div>
          <input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {loggedInUser}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default SessionLogin;
