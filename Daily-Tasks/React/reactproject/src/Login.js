import React from "react";

function Login({example1}){
    const[isLoggedIn,setIsLoggedIn]=React.useState(false);
    return(
        <div>
            <h1>Conditional Rendering {example1}</h1>
            {isLoggedIn?<p>"Welcome"</p>:<p>"Please Login"</p>}
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
            
        </div>
    );
}

export default Login;