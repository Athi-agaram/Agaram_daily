function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

// function Car(props) {

//   return (
//     //array
//     <div>
//     {/* <h2>My car is a {props.carinfo[0]} {props.carinfo[1]}!</h2> */}
//     <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
//     <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
//     </div>
//   );
// }
export default Car;