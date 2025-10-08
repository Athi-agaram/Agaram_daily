import { useState,useEffect } from "react";

function useEff(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
         console.log("useEffect ran");
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000)
    },[]);
    return(
        <>
        <p>Counter : {count}</p>
        </>
    )
}
export default useEff