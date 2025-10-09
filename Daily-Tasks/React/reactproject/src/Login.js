import { useState } from "react"

function Login(){
    debugger
 const[isLoggedIn,setIsLoggedIn]=useState(false)
 return(
    <>
    <p>{isLoggedIn?"Welcome":"Please Login"}</p>
    <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn?"Logout":"Login"}</button>
    </>
 )
}
export default Login