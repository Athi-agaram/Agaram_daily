import React,{useState} from 'react';

function Function1({name}){
    const[count,setCount]=useState(0);
    return(
        <div style={{marginTop:'50px'}}>
            <h1>Function Component</h1>
            <h2>{name} : {count}</h2>
            <button onClick={()=>setCount(count+1)}>increment</button><br></br>
            <button onClick={()=>setCount(count-1)}>decrement</button>
        </div>
    )
}
export default Function1