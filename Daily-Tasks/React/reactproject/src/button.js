  function handleClick() {
    alert("Button clicked!");
  }

function Button({ text}) {
  return (
    <button 
        onClick={handleClick} 
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}

export default Button