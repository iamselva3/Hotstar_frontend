import React, { useContext, useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../App';

const Login = () => {
    const [email,setemail]=useState("");
 const [password,setpassword]=useState("");

 const {setuser,setPage}=useContext(Context);

 console.log(setPage)

 let navigate= useNavigate();
 
const handlesubmit = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users"); // Fetch all users
      const users = response.data;
  
      const user = users.find((u) => u.name === email && u.address === password); // Check if user exists
  
      if (user) {
        if (email === "admin" && password === "admin") {
          navigate("/admin");
        } else {
          setuser(email)
          // setPage("/home");
          navigate("/home");
        }
      } 
  
      else if( user !== password){
        alert("Password Does not match.Try Again.");
        navigate("/")
      }
      
      
      else {
        alert("User does not exist. Please sign up first.");
        navigate("/signup");
      }
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error fetching users", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className='body'>
       <img src='/Star.png' alt='dh' className='dhlogo'></img>
       <div className='loginbody'>
       <h1>
        Login 
       </h1>
       <label>Username</label><br></br>
       <input type="text" placeholder='Enter your username' className='input' value={email} onChange={(e)=>setemail(e.target.value)} required></input><br></br>
       <label>Password</label><br></br>
       <input type="password" placeholder='Enter your password' className='input' value={password} onChange={(e)=>setpassword(e.target.value)} required/> <br></br>
       <button class='button'  onClick={handlesubmit}>Login</button><br></br>
       <p style={{marginTop:"10px"}}>
            Don't have an account?<b> <a style={{color:'white'}} href="/signup">Sign up</a></b>
          </p>
       {/* <Button variant="primary" className="w-100">Login</Button> */}
       </div>
      
    </div>
  )
}

export default Login;
