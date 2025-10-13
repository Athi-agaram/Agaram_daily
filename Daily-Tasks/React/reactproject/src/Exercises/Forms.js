import { useState } from "react";

function Form(){
    const[name,setName]=useState("Athi");
    function handlechange(e){
        setName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }
    return(
    <form onSubmit={handleSubmit}>
        {/* <label>Enter name:
            <input type="text" value={name} onChange={handlechange}/>       
        </label>
          <p>current value:{name}</p> */}
          <select value={name} onChange={handlechange}>
            <option value="Athi">Athi</option>
            <option value="Achu">Achu</option>
            <option value="Athiii">Athiii</option>
            <option value="Achuuuu">Achuuuu</option>
          </select>
          <input type="Submit"/>
    </form>
    );
}

export default Form;