import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function CookieUsername() {
  const [username, setUsername] = useState("");
  const [storedName, setStoredName] = useState("");

  // Load cookie on mount
  useEffect(() => {
    const name = Cookies.get("username");
    if (name) setStoredName(name);
  }, []);

  const handleSave = () => {
    Cookies.set("username", username, { expires: 7, path: "/" });
    setStoredName(username);
    setUsername("");
  };

  const handleDelete = () => {
    Cookies.remove("username", { path: "/" });
    setStoredName("");
  };

  return (
    <div>
      <h2>Cookie Example</h2>
      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSave}>Save Cookie</button>
      <button onClick={handleDelete}>Delete Cookie</button>
      {storedName && <p>Welcome back, {storedName}!</p>}
    </div>
  );
}

export default CookieUsername;
