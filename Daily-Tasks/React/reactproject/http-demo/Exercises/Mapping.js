function Movies(){
    const movies=[
        {id:1,title:"Fight Club"},
        {id:2,title:"Shutter Island"},
        {id:3,title:"Truman Show"}
    ]
    return(
        <ul>
            {movies.map((movie)=>
            <li>the movie id are {movie.id},This is {movie.title}</li>
            
            )}
        </ul>
    )
}

// function Movies(){
//   const movies=["Fight Club","Truman Show","Shutter Island"];
//   return(
//     <div>
//       <h1>Movies:</h1>
//       <ul>
//         {movies.map((movie)=>
//         <li>This is {movie}</li>)}
//       </ul>
//     </div>
//   )
// }

export default Movies;