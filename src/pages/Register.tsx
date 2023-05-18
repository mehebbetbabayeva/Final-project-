import { useState } from "react";
import {register} from "../firebase";
import { Toaster } from 'react-hot-toast';
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
 
  const [email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const handleSubmit =async( e:any) =>{
    e.preventDefault()
      const user = await register (email,password)
      console.log(user)

  }
  return (
    <div>
    <Toaster />
    
    <div className="login">
    <div className="container">
   <div className="login-content">
 <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Register Form</h2>
            <TextField 
                label="Email"
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="email"
                sx={{mb: 3}}
                fullWidth
                value={email}
              
             />
             <TextField 
                label="Password"
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={password}
               
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit" disabled={!email || !password}>Register</Button>
             <small>if you have account <Link to="/login">Login</Link></small>
         
    </form>

 </div>
    </div>
    </div>
    </div>
  )
}

export default Register