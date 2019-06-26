import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = (props) => {
  return (
   <form onSubmit={() => {}}>
     <TextField id="firstName" name="firstName" label="First Name" fullWidth type="text" />
     <TextField id="lastName"name="lastName"label="Last Name"fullWidth type="text" />
     <TextField id="address1" name="address1" label="Address" fullWidth type="text"/>
     <TextField id="address2" name="address2" label="Apt/Suite" fullWidth type="text"/>
     <TextField id="city" name="city" label="City" fullWidth type="text"/>
     <TextField id="state" name="state" label="State" fullWidth type="text"/>
     <TextField id="zip" name="zip" label="Zip" fullWidth />
     <Button type="submit" variant="raised" color="primary"> Submit </Button>
   </form>
 );
};