import React, { useState, useEffect } from "react";

function UsernameStorage() {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

  // Load stored name on component mount
  useEffect(() => {
    const nameFromStorage = localStorage.getItem("username");
    if (nameFromStorage) setStoredName(nameFromStorage);
  }, []);

  const handleSave = () => {
    localStorage.setItem("username", name);
    setStoredName(name);
  };

  return (
    <div>
      <h2>Username Storage</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      {storedName && <p>Welcome back, {storedName}!</p>}
    </div>
  );
}

export default UsernameStorage;
