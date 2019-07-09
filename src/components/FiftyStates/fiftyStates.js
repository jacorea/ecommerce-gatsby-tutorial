import React, { Component } from 'react'

//Element Imports 
import states from '../../Elements/FiftyStates'



export class fiftyStates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            state: "",
        }
    }



    render() {
        console.log(states)
        return (
            <div>
                
            </div>
            )
        }
}

export default fiftyStates
