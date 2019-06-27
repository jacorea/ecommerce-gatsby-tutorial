import React from "react";

//Material-ui Imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = (props) => {
  const {
    values: { firstName, lastName, address1, address2, city, state, zip },
    errors,
    touched, 
    handleChange,
    isValid,
    setFieldTouched,
  } = props;

  const change = (name,e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    console.log(name)
  }
  return (
   <form onSubmit={() => {
     alert("submitted")}
    }>
     <TextField 
      id="firstName" 
      name="firstName" 
      label="First Name"
      helperText={touched.firstName ? errors.firstName : ""}
      error={touched.firstName && Boolean(errors.firstName)}
      value={firstName}
      onChange={change.bind(null, "firstName")} 
      fullWidth
     />
     <TextField 
        id="lastName" 
        name="lastName" 
        label="Last Name"
        helperText={touched.lastName ? errors.lastName : ""}
        error={touched.lastName && Boolean(errors.lastName)}
        value={lastName}
        onChange={change.bind(null, "lastName")}  
        fullWidth 
        type="text" 
      />
     <TextField 
        id="address1" 
        name="address1" 
        label="Address"
        helperText={touched.address1 ? errors.address1 : ""}
        error={touched.address1 && Boolean(errors.address1)}
        value={address1}
        onChange={change.bind(null, "address1")}  
        fullWidth 
        type="text"
      />
     <TextField 
        id="address2" 
        name="address2" 
        label="Apt/Suite"
        value={address2}
        onChange={change.bind(null, "address2")} 
        fullWidth 
        type="text"
      />
     <TextField 
        id="city" 
        name="city" 
        label="City"
        helperText={touched.city ? errors.city : ""}
        error={touched.city && Boolean(errors.city)}
        value={city}
        onChange={change.bind(null, "city")} 
 
        fullWidth 
        type="text"
      />
     <TextField city
         id="state"
        name="state" 
        label="State"
        helperText={touched.state ? errors.state : ""}
        error={touched.state && Boolean(errors.state)}
        value={state}
        onChange={change.bind(null, "state")}  
        fullWidth 
        type="text"
      />
     <TextField 
        id="zip" 
        name="zip" 
        label="Zip"
        helperText={touched.zip ? errors.zip : ""}
        error={touched.zip && Boolean(errors.zip)}
        value={zip}
        onChange={change.bind(null, "zip")}
        fullWidth 
      />
     <Button 
        type="submit" 
        variant="raised" 
        color="primary"
        disabled={!isValid} 
        fullWidth
      > Submit
      </Button>
   </form>
 );
};