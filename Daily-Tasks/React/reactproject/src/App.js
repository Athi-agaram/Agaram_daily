import CLass1 from './Class1';
import Function1 from './Function1';
import Login from './Login';
import Car from './Car';
function App(){

    return(
      <div>
        <CLass1/>
        <Function1 name="Counter"/>
        <Login />
        <Car brand="Ford" model="Mustang" color="red" year={1969} />


      </div>
    );
  }


export default App;

