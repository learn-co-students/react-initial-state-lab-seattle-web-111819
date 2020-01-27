// your ImageSlider code here!

// STEP 1
import React from 'react'

// STEP 2
class ImageSlider extends React.Component {

    // STEP 4
    // constructor sets the INITIAL STATE with a property called "currentSlideIndex"
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    // STEP 5
    render() {
        return ( 
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}

// STEP 3
export default ImageSlider;