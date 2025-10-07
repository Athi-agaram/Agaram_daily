import React from "react";

function Login(){
    const[isLoggedIn,setIsLoggedIn]=React.useState(false);
    return(
        <div>
            <h1>Conditional Rendering</h1>
            {isLoggedIn?<p>"Welcome"</p>:<p>"Please Login"</p>}
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn?"Logout":"Login"}
            </button>
            
        </div>
    );
}

export default Login;