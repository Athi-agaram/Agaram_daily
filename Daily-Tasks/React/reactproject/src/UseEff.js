import { useState,useEffect } from "react";

function useEff(){
    const [count,setCount]=useState(0);
    const [calculation,setcalculation]=useState(0);
    useEffect(()=>{
        setcalculation(()=>count*2)
    },[count]);
    return(
        <>
        <p>Counter : {count}</p>
        <button onClick={()=>setCount((c)=>count+1)}>Click</button>
        <p>Calulation : {calculation}</p>
        </>
    )
}
export default useEff