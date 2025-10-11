import { useState } from "react";
function Radio(){
    const[fruits,setFruits]=useState("apple")
    function handleSubmit(e){
        e.preventDefault();
        alert(`favourite fruit is :${fruits}`);
    }
    function handlechange(e){
        setFruits(e.target.value);
    }
    return(
    <form onSubmit={handleSubmit}>
        <p>Select a fruit</p>
        <label>
            <input 
            type="radio"
            name="fruit"
            value="apple"
            checked={fruits==="apple"}
            onChange={handlechange}/>Apple
        </label>
        <br/>
        <label>
            <input 
            type="radio"
            name="fruit"
            value="mango"
            checked={fruits==="mango"}
            onChange={handlechange}/>Mango
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
    )
}

export default Radio