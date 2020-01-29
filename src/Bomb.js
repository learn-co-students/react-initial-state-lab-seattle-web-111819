// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends Component {

    // constructor sets the INITIAL STATE with a property called "secondsLeft"
    // pass in "props" as an argument since bombs can differ in starting count
    constructor(props) { //props that the component gets from its parent
        // super() is required in order to use "this" inside constructor
        super()
        this.state = { //define initial state with a key of 'key' set to the 'value' prop
            secondsLeft: props.initialCount
        }
    }

    // It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
    // If secondsLeft equals 0, it should render 'Boom!' instead.

    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

export default Bomb