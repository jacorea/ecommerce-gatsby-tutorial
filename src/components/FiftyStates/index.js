import React, { Component } from 'react';

//Element Imports 
import states from '../../Elements/FiftyStates';

//Material-ui imports 
import {Select, MenuItem, FormControl, InputLabel, Input } from '@material-ui/core';




export class fiftyStates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            states: [],
            state: "",
        }
    }

    componentDidMount = () => {
        const {state} = this.state
        this.createArrayOfStates(states)
        console.log(state)
    }

    createArrayOfStates = (array) => {
        const newArray = array.map(obj => `${obj.name} (${obj.abbreviation})`)
        this.setState({states:newArray})
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        const {states, state} = this.state 
        console.log(state)
        return (
            <form>
                <FormControl>
                    <InputLabel>State</InputLabel>                    
                    <Select id="state" name="state" label="state" onChange={this.handleChange} value={this.state.state} >
                        {this.state.states.map((state,index) => {
                            return(<MenuItem key={index} value={state}>{state}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </form>
            )
        }
}

export default fiftyStates
