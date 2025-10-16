import { useState } from "react";
import { useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import "./styles.css"
import { encrypt, decrypt } from "./encrypt";

function LoginPage(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const login=((e)=>{
        e.preventDefault();
        const encryptedUser=encrypt(username);
        const encryptedPass=encrypt(password)
        if(username===""&&password===""){
            alert("Please enter Username and Password")
        }
        else if(decrypt(encryptedUser)==="user"&&decrypt(encryptedPass)==="pass"){
            const sessionData=JSON.stringify({
                username:encryptedUser,
                password:encryptedPass
            })
            
            Cookies.set("sessionToken",sessionData,{expires:1,path:"/"})
            navigate("/Home")
            
        }
        else{
            alert("Invalid username or password")
            setUsername("")
            setPassword("")
        }
        

    })
    const handleUser=((e)=>{
        e.preventDefault();
        setUsername(e.target.value) 
    })
        const handlePass=((e)=>{
        e.preventDefault();
        setPassword(e.target.value) 
    })


    return(
        <>
        <div className="login-page" >
            <div className="glass-card">
            <form >
                <input 
                type="text" 
                placeholder="Enter Username"
                value={username}
                onChange={handleUser}
                />
                <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={handlePass}
                />
                <button className="button" onClick={login}>Login</button>
            </form>
            </div>
        </div>
        </>
    )

}

export default LoginPage