import { useState } from "react";
import {login} from "../firebase";
import { Toaster } from 'react-hot-toast';
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";
import {login as loginHandle} from "../redux/auth";
import { useNavigate } from "react-router-dom";
import { FormEvent } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail]=useState<string>('');
    const [password,setPassword] = useState<string>('');
    const handleSubmit =async( e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
        const user = await login (email,password)
        dispatch(loginHandle(user))
        navigate('/',{
            replace:true
        })
    }
 
    

   
    
  return (
    <div>
    <Toaster />
    
    <div className="login">
    <div className="container">
   <div className="login-content">
 <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
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
             <Button variant="outlined" color="secondary" type="submit" disabled={!email || !password}>Login</Button>
             
         
    </form>

 </div>
    </div>
    </div>
    </div>
  )
}

export default Login