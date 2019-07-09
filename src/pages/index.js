import React from "react"
import NewForm from "../components/NewForm"
import FiftyStates from "../components/FiftyStates"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

//   handleInputChange = (e) => { 
//       console.log(e.target.value)
     

//       this.setState({[e.target.name]: e.target.value,})
//   }

//   handleSubmit = e => {
//       const {firstName, lastName } = this.state
//       e.preventDefault()
//       alert(`welcome ${firstName} ${lastName}!`)
//   }



  render() {
    return (
     <div>
         <NewForm/>
     </div>
    )
  }
}