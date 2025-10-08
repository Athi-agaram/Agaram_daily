//If a component takes time to load, you can use a Suspense component, and it will display the fallback 
// content while the component is loading.

function fetchFruits(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(['Apple','Banana','Mango'])
        },3000);
    })
}

let fruitResource={
    data:null,
    read(){
        if(this.data!=null) return this.data
        throw fetchFruits().then((result)=>this.data=result)
    }
};

function MyFruits(){
    const fruits=fruitResource.read();
    return(
        <>
        <h1>The fruits are:</h1>
        <ul>
            {fruits.map((fruit)=>(
                <li>{fruit}</li>
            ))}
        </ul>
        </>
    )
}

export default MyFruits