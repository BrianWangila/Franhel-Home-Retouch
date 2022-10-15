import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Dialog, Button } from '@material-ui/core'
import SignUp from './SignUp'
import Login from "./Login"


function Navbar({ onSignUp, onLogin }) {

  const [open, setOpen] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(true);


  const handleOpen = () => {
    setOpen(true)
  }
 

  const handleClose = () => {
    setOpen(false)
  }



  return (
    
    <div className='bg-img'>
      <div className=''>
        <nav className="navbar navbar-expand-lg nav-color">
          <div className="container-fluid">
            <Link className="navbar-brand " style={{color: "white", fontSize: 17+"px", marginLeft: 1+"vw"}} to="/">Franhel <span style={{color: "orangered"}}> HOME <br/> RETOUCH</span></Link>
            <div className="nav-icon">
              <div className="nav-icons">
                <Link className="icon nav-link" aria-current="page" to="/" >Home</Link>
                <Link className="icon nav-link" to="/about" >About us</Link>
                <Link className="icon nav-link" to="/services" >Contact us</Link>
                <Link className="icon nav-link" to="/login" >Login</Link>
              </div>
              <button type="button" className ="btn btn-danger ml-auto" onClick={handleOpen}>Create account</button>
            </div>
          </div>
        </nav>
        
        <Dialog open={open} onClose={handleClose}>
          <SignUp onSignUp={onSignUp} handleClose={handleClose} />
        </Dialog>

{/*    
      {showSignUp ? (
        <>
        <Dialog open={open} onClose={handleClose}>
          <SignUp onSignUp={onSignUp} handleClose={handleClose} />
        </Dialog>
        <p>
          ALready have an account?
          <Button>Login</Button>
        </p>
        </>
      ):(
        <Dialog open={open} onClose={handleClose}>
         <Login onLogin={onLogin} />
        </Dialog>
        
      )} */}

        <center className="home-tab">
          <div className='para'>
            <h2 className='txt'>Franhel Home Retouch</h2> 
            <h5 className="txt-2"> transforms your house to a HOME</h5>
          </div>

          <p className='sub'>Subscribe to our newsletter</p>
          <form className="d-flex" role="search">
            <label className='form-label'></label>
            <input className="form-control me-2" type="search" />
            <button className="btn btn-danger color" type="submit">Subscribe</button>
          </form>
        </center>
      </div>
    </div>
  )
  }

export default Navbar