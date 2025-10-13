function Son(props){
    return(
        <div style={{backgroundColor:"green"}}>
            <h1>Hi this is son</h1>
            <div>{props.children}</div>
        </div>
    )
}

function Daughter(props){
    return(
        <div style={{backgroundColor:"blue"}}>
            <h1>Hi this is the daughter</h1>
            <div>{props.children}</div>
        </div>
    )
}

function Parent(){
    return(
        <div>
            <h1>My two children</h1>
        <Son>
            <p>this is written in parent function</p>
        </Son>
        <Daughter>
            <p>this is written in parent function</p>
        </Daughter>
        </div>
    )
}

export default Parent;