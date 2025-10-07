import React, {Component} from'react';
import CLass1 from './Class1';
import Function1 from './Function1';
import Login from './Login';

class App extends Component{
  render(){
    return(
      <div>
        <CLass1/>
        <Function1 name="Counter"/>
        <Login/>
      </div>
    );
  }
}

export default App;

