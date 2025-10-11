import { Component } from "react";

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state={color:"red"};
    }
    componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellow"})
    }, 1000)
  }
     getSnapshotBeforeUpdate(prevProps, prevState) {
         document.getElementById("div1").innerHTML =
         "Before the update, the favorite was " + prevState.color;
  }
    componentDidUpdate() {
         document.getElementById("div2").innerHTML =
         "The updated favorite is " + this.state.color;
  }
    // static getDerivedStateFromProps(props,state){
    //     return {color:props.newcolor}
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    // changeColor=()=>{
    //     this.setState({color:"blue"});
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"yellow"})
    //     })
    // }
    render(){
        return(
            <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        </div>
        );
    }
}

export default Lifecycle;