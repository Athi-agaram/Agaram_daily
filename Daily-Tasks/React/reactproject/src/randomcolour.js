import React, { useState } from "react";

function RandomColorButton() {
  const [color, setColor] = useState("black");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let c = "#";
    for (let i = 0; i < 6; i++) {
      c += letters[Math.floor(Math.random() * 16)];
    }
    return c;
  }

  return (
    <div>
      <button onClick={() => setColor(getRandomColor())}>Change Color</button>
      <p style={{ color }}>This text changes color!</p>
    </div>
  );
}

export default RandomColorButton;
