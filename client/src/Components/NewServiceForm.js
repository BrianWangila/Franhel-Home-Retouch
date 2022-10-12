import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "300px"
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2)
    }
  }
}));

function Form( { handleClose } ) {

  const classes = useStyles();
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")



  const handleSignup = (e) => {
    e.preventDefault();
    console.log(service, location, contact, address, description);
    handleClose();
  }

  return (
      <form className={classes.root} onSubmit={handleSignup}>
        <TextField 
          label="Type of service" 
          variant="filled" 
          required
          value={service}
          onChange = {(e) => setService(e.target.value)}
        />

        <TextField 
          label="Location of building" 
          variant="filled" 
          required
          value={location}
          onChange = {(e) => setLocation(e.target.value)}
        />

        <TextField 
          label="Address information" 
          variant="filled" 
          type="text" 
          required
          value={address}
          onChange = {(e) => setAddress(e.target.value)}
        />

        <TextField 
          label="Phone number" 
          variant="filled" 
          type="number"
          required
          value={contact}
          onChange = {(e) => setContact(e.target.value)}
        />

       <TextField 
          label="Description of service" 
          variant="filled" 
          type="text" 
          required
          value={description}
          onChange = {(e) => setDescription(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Make a Request</Button>
        </div>
      </form>
  )
}

export default Form