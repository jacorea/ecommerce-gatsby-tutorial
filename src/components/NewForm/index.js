import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";

//Material-ui Imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";

const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`
 },
 container: {
   maxWidth: "500px",
   margin: "auto",
 }
});

const validationSchema= Yup.object({
  firstName: Yup.string("Please enter your First Name").required("First Name is required"),
  lastName: Yup.string("Please enter your Last Name").required("Last Name is required"),
  address1: Yup.string("Please enter your Address").required("Address is required"),
  city: Yup.string("Please enter your City").required("City location is required"),
  state: Yup.string("Please enter your State").required("State is required"),
  zip: Yup.string("Please enter your Zip Code").required("Zip Code is required"),
})


class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastName: "",
      corporation: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip:"",
      donation: "",
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(`welcome ${this.state.firstName} ${this.state.lastName} `)
  }
 
  render() {
   const {classes} = this.props;
   const values = {firstName:"", lastName:"", address1:"", address2:"", city:"", state:"", zip:""}
   const {firstName, lastName,corporation, address1,address2,city,state,zip,donation} = this.state;
   return (
   <div className={classes.container}>
     <Paper className={classes.paper}>
   <form onSubmit={this.handleSubmit}>
     <TextField 
      id="firstName" 
      name="firstName" 
      label="First Name"
      value={firstName}
      onChange={this.handleChange}
      fullWidth
     />
     <TextField 
        id="lastName" 
        name="lastName" 
        label="Last Name"
        value={lastName}
        onChange={this.handleChange}
        fullWidth 
        type="text" 
      />
     <TextField 
        id="address1" 
        name="address1" 
        label="Address"
        value={address1}
        onChange={this.handleChange}
        fullWidth 
        type="text"
      />
     <TextField 
        id="address2" 
        name="address2" 
        label="Apt/Suite"
        value={address2}
        onChange={this.handleChange}
        fullWidth 
        type="text"
      />
     <TextField 
        id="city" 
        name="city" 
        label="City"
        value={city}
        onChange={this.handleChange} 
        fullWidth 
        type="text"
      />
     <TextField city
         id="state"
        name="state" 
        label="State"
        value={state}
        onChange={this.handleChange}
        fullWidth 
        type="text"
      />
     <TextField 
        id="zip" 
        name="zip" 
        label="Zip"
        value={zip}
        onChange={this.handleChange}
        fullWidth 
      />
     <Button 
        type="submit" 
        variant="raised" 
        color="primary"
        fullWidth
      > Submit
      </Button>
   </form>
   </Paper>
   </div>
   );
 }
}

export default withStyles(styles)(NewForm);