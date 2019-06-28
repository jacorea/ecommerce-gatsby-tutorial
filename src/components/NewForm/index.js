import React, { Component, useState, Fragment, useEffect } from "react";
import { Formik, Field } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";



//Material-ui Imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

//Other Libraries
import * as Yup from "yup";
import classNames from "classnames";

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
 },
 section: {
   textAlign: "center",
   alignItems: "Center"
 },
 h3: {
  textAlign: "center",
  alignItems: "Center"
 },
 hr: {
   maxWidth: "200px",
   alignItems: "Center",
   align: "center"
 }
});

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className={classNames("input-feedback")}>{error}</div> : null;

// Checkbox input
const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
      />
      <label htmlFor={id}>{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
  );
};

// Radio input
const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );
  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

const validationSchema= Yup.object({
  firstName: Yup.string("Please enter your First Name").required("First Name is required"),
  lastName: Yup.string("Please enter your Last Name").required("Last Name is required"),
  address1: Yup.string("Please enter your Address").required("Address is required"),
  city: Yup.string("Please enter your City").required("City location is required"),
  state: Yup.string("Please enter your State").required("State is required"),
  zip: Yup.string("Please enter your Zip Code").required("Zip Code is required"),
})
const initialState = {
  firstname: "",
  lastName: "",
  corporation: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip:"",
  amount: "",
};

class NewForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   firstname: "",
    //   lastName: "",
    //   corporation: "",
    //   address1: "",
    //   address2: "",
    //   city: "",
    //   state: "",
    //   zip:"",
    //   donation: "",
    // };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    alert(`welcome ${initialState.firstName} ${this.state.lastName} `)
  }
 
  render() {
   const {classes} = this.props;
   const values = {firstName:"", lastName:"", address1:"", address2:"", city:"", state:"", zip:""}
  //  const {firstName, lastName,corporation, address1,address2,city,state,zip,donation} = this.state;
   return (
   <Fragment>
        <Formik
          initialValues={initialState}
          onSubmit={(values,actions) => {
            alert(`Welcome ${values.firstName} ${values.lastName}`);
          }}>
            {props => (
            <div>
            <div className={`${classes.section}`}>
              <h1>Donate</h1>
              <hr className={classes.hr} />
              <h3>Billing Information</h3>
            </div>
            <form className={`${classes.container}`} onSubmit={props.handleSubmit}>
              <Field 
                  component={Checkbox}
                  id="corporation"
                  name="corporation"
                  label=" Is this a Corporate Donation?"
              />
              <TextField 
                id="firstName" 
                name="firstName" 
                label="First Name"
                value={props.values.firstName}
                onChange={props.handleChange}
                fullWidth
              />
              <TextField 
                  id="lastName" 
                  name="lastName" 
                  label="Last Name"
                  value={props.values.lastName}
                  onChange={props.handleChange}
                  fullWidth 
                  type="text" 
                />
              <TextField 
                  id="address1" 
                  name="address1" 
                  label="Address"
                  value={props.values.address1}
                  onChange={props.handleChange}
                  fullWidth 
                  type="text"
                />
              <TextField 
                  id="address2" 
                  name="address2" 
                  label="Apt/Suite"
                  value={props.values.address2}
                  onChange={props.handleChange}
                  fullWidth 
                  type="text"
                />
              <TextField 
                  id="city" 
                  name="city" 
                  label="City"
                  value={props.values.city}
                  onChange={props.handleChange} 
                  fullWidth 
                  type="text"
                />
              <TextField city
                  id="state"
                  name="state" 
                  label="State"
                  value={props.values.state}
                  onChange={props.handleChange}
                  fullWidth 
                  type="text"
                />
              <TextField 
                  id="zip" 
                  name="zip" 
                  label="Zip"
                  value={props.values.zip}
                  onChange={props.handleChange}
                  fullWidth 
                />
              <TextField 
                  id="amount" 
                  name="amount" 
                  label="Amount"
                  value={props.values.amount}
                  onChange={props.handleChange}
                  fullWidth 
                />
                <div>
                  <br/>
                </div>
                <div>
                  <h3 className={classes.h3}>Make a Donation</h3>
                    <Grid container>
                    <Grid item xs>
                    <Field
                      component={RadioButton}
                      name="radioGroup"
                      id="radioOption1"
                      label=" Monthyly Donation"
                    />
                    </Grid>
                  <Grid xs>
                    <Field
                      component={RadioButton}
                      name="radioGroup"
                      id="radioOption2"
                      label=" One-time Donation"
                    />
                    </Grid>
                    </Grid>                   
                </div>
                
                <Button 
                  type="submit" 
                  variant="raised" 
                  color="primary"
                  disable={!props.dirty && !props.isSubmitting}
                  fullWidth
                > Submit
                </Button>
              </form>
            </div>
            )}
      </Formik>
   </Fragment>
   );
 }
}

export default withStyles(styles)(NewForm);