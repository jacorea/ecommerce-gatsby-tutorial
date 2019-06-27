import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
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

const submitValues=({firstName,lastName, address1,address2,state,city,zip}) => {
  console.log({firstName,lastName, address1,address2,state,city,zip})
}

class DonateForm extends Component {
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

  handleInputChange = (e) => {
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
   <React.Fragment>
     <div className={classes.container}>
         <Paper elevation={1} className={classes.paper}>
         <h1> Donation Form</h1>
         <hr></hr>
         <Formik
             render={props => <Form {...props} />}
             initialValues={values}
             validationSchema={validationSchema}
             onSubmit={submitValues}
         />
         </Paper>
     </div>
   </React.Fragment>
   );
 }
}

export default withStyles(styles)(DonateForm);