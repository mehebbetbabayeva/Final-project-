import  {useState} from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event:any) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            console.log(email, password)
        }
    }

   
    
  return (
    <div className="login">
    <div className="container">
 \<div className="login-content">
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
                error={emailError}
             />
             <TextField 
                label="Password"
                onChange={e => setPassword(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="password"
                value={password}
                error={passwordError}
                fullWidth
                sx={{mb: 3}}
             />
             <Button variant="outlined" color="secondary" type="submit">Login</Button>
         
    </form>

 </div>
    </div>
    </div>
  )
}

export default Login