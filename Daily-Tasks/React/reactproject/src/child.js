const Child =(props) =>{
    function handleclick(){
        props.onChange("red");
    }
 
    return(
        <div>
            <h1>child</h1>
            <button onClick={handleclick}>send</button>
         
        </div>
    )
}
 
export default Child
 