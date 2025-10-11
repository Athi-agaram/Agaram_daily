import React, { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");
  function handlechange(e){
    setText(e.target.value)
  }

  return (
    <div>
        <h2>Live Text</h2>
      <input value={text} onChange={handlechange} placeholder="Type here..." />
      <p>Live: {text}</p>
    </div>
  );
}

export default LiveInput;
