import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => { 
      const target = event.target 
      const value = target.value 
      const name = target.name

      this.setState({[name]: value,})
  }

  render() {
    return (
      <form>
        <label>
          First name
          <input 
            type="text" 
            name="firstName" 
            onChange={this.handleInputChange} 
            value={this.state.firstName}/>
        </label>
        <label>
          Last name
          <input 
            type="text" 
            name="lastName"
            onChange={this.handleInputChange} 
            value={this.state.firstName} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}