import React, { Component } from "react";

// your Bomb code here!

export default class Bomb extends Component{
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const phrase = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    
    return(
    <h1>{phrase}</h1>
    )

  }
}

