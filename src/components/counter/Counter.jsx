import React, { Component } from "react";
// import propTypes from 'prop-types'
import './Counter.css';

class Counter extends Component {
    constructor(){
        super();  //Error 1
        this.state = {
            counter: 0
        }

    this.increment= this.increment.bind(this)
    this.decrement= this.decrement.bind(this)
    this.reset= this.reset.bind(this)

    }

    increment(by){
        console.log(`counter from parent.... ${by}`)

    // this.setState({
    //     counter: this.state.counter + by //+ this.props.by
    // })

    // Best practice is to update state using arrow function
    this.setState(
        (prevState)=>{
        return {counter: prevState.counter + by}
        }
    )
}

    decrement(by){
    this.setState(
        (prevState)=>{
        return {counter: prevState.counter - by}
        }
    )
}
    reset(){
        this.setState(()=>{
            return {counter: 0}
        })
    }

  render(){
    return (
    <div className="counter">
        <div className="title">Counter App</div>
      <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
      {/* //Example for proptype check
      <Counter by="1"/> */}
      <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <span className="parent-count">{this.state.counter}</span>
      <div><button onClick={this.reset} className="reset">Reset</button></div>
    </div>
  );
  }
}

class CounterButton extends Component{

    // Define initial state in a constructor
    // state => counter 0
    constructor(){
        super();  //Error 1
        this.state = {
            counter: 0
        }

    // bind method to the class 
    this.increment= this.increment.bind(this)
    this.decrement= this.decrement.bind(this)

    }

    // can be changed to arrow function to avoid method bind into the constructor
//  increment = () => { // update state - counter++
 increment(){ // update state - counter++
    console.log("increment from child.....")
    // this.state.counter++;  // should not update state directly

    // Not a best prectice
    // this.setState({
    //     counter: this.state.counter + this.props.by
    // })
    // Best practice is to update state using arrow function
    this.setState(
        (prevState)=>{
        return {counter: prevState.counter + this.props.by}
        }
    )

    // calling the parent increment method here
    this.props.incrementMethod(this.props.by);
}

 decrement(){
    this.setState(
        (prevState)=>{
        return {counter: prevState.counter - this.props.by}
        }
    )
    this.props.decrementMethod(this.props.by);
}

// changed to arrow function - not neccessary
    // render = () => {
    render(){
        return(
        <div className="counter-btn">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button>
            {/* No need to display individual counter */}
            {/* <span className="count">{this.state.counter}</span> */}
        </div>
    );
    }
}

// we can provide default value to the prop as well like this
CounterButton.defaultProps = {
    by: 1
}
// can give prop type as well
// Counter.propTypes = {
//     by: propTypes.number
// }

export default Counter;