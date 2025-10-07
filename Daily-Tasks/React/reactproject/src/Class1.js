import React, {Component} from'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  increment=()=>{
    this.setState({count:this.state.count+1});
  }
  decrement=()=>{
    this.setState({count:this.state.count-1});
  }

  render(){
    return(
      <div>
        <h1>Class component</h1>
        <h2>Counter:{this.state.count}</h2>
        <button onClick={this.increment}>Click to add</button><br></br>
        <button onClick={this.decrement}>Click to sub</button>
      </div>
    );
  }
}

export default App;


// import React,{Component} from 'react';

// class App extends Component{
//   render() {
//     return(

//       <div>
//         <h1>Hi from class Componet!</h1>
//       </div>
//     )
//   }

// }

// export default App;
