import { useState } from "react";

function Formsmultiple(){
    const[name,setName]=useState({});
    function handlechange(e){
        const fname=e.target.name;
        const value=e.target.value;
        setName(values => ({...values , [fname] :value}));
    }
    return(
        <form>
            <label>firstName:
                <input type="text"
                name="firstName"
                value={name.firstName}
                onChange={handlechange}/>
            </label>
            <label>firstName:
                <input type="text"
                name="lastName"
                value={name.lastName}
                onChange={handlechange}/>
            </label>
            <p>current value: <br></br>firstname : {name.firstName} <br></br>lastname : {name.lastName}</p>
        </form>
    )
}

export default Formsmultiple;