import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    
    if (details.email === adminUser.email && details.password === adminUser.password) {
        console.log("Logged in");
    
        setUser({
        name: details.name,
        email: details.email
      })
     
    }  else {
     console.log("Details Do Not Match!");
     setError("Details Do Not Match!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""})
  }

  return (
    <div className="App">
        {(user.email !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>Logout</button>
          </div>
         ) : (
          <LoginForm Login={Login} error={error} />
        )} 
         <SignupForm />
    </div>  
   );
}
export default App;