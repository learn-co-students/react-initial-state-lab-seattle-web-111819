import React from 'react'

export default class Bomb extends React.Component {

    render() {
        return(
          <div>
              <h2>{this.props.initialCount == 0 ? "Boom!" : `${this.props.initialCount} seconds left before I go boom!`}</h2>
              
          </div>  
        )
    }
}
