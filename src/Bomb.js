// your Bomb code here!
import React from 'react';
// import { initialCount } from "index"; ?????
class Bomb extends React.Component{
    constructor(props) {
    super()
    this.state = {
        secondsLeft: props.initialCount
    }
}
// render() {
//     return (
//         <div>
//            if (secondsLeft == 0) {
//                'Boom!'
//                }else{
//                 `${this.state.secondsLeft} seconds left before I go boom!`
//                 }
//                 </div>
//     )
// }

render() {
    if(this.state.secondsLeft === 0) {
        return (
            <div>
                {"Boom!"}
            </div>
        )
    } else {
    return (
        <div>
            {this.state.secondsLeft + ` seconds left before I go boom!`}
        </div>
    )
    }
  }
}
export default Bomb