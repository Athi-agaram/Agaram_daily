import { useState } from "react";
function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Toggle button</h2>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default ToggleSwitch;