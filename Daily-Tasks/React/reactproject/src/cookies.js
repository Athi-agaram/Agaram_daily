import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function CookieUsername(){
    const[username,setUsername]=useState("");
    const[storedName,setStoredName]=useState("");


    useEffect(()=>{
        const name="username"
        if(name){
            setStoredName(name)
        }
    },[])

  function handleSave() {
    Cookies.set("username", username, { expires: 7, sameSite: "strict" });
    setStoredName(username);
    setUsername("");
  };

  const handleDelete = () => {
    Cookies.remove("username");
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
