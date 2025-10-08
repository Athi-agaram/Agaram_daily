import { useState, useTransition } from "react";

function Search(){
    const [text,setText]=useState("");
    const [result,setResult]=useState("");
    const [pending,startTransition]=useTransition();

    const handleChange=(e)=>{
        setText(e.target.value);

        startTransition(()=>{
            setResult(e.target.value);
        });
    };
    return(
        <>
        <input type={text} onChange={handleChange}/>
        {pending?(<p>Loading..</p>):(<p>Search for : {result}</p>)}
        
        </>
    );

}
export default Search