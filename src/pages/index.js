import React from "react"
import DonateForm from "../components/DonateForm"

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
         <DonateForm/>
     </div>
    )
  }
}