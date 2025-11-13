import React, { useState } from 'react';
import "./signup.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
      });
    
      const navigate = useNavigate();
    
      // **Handle text input changes**
      const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };
    
      const submitForm = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, user, {
                headers: { "Content-Type": "application/json" }
            });
            navigate("/");
            console.log("User added successfully");
        } catch (error) {
            console.error("Axios Error:", error);
        }
      };
  return (
    <div className='body1'>
      <a href='/'>  <img src='./Starflix.png' alt='hotstar' className='jio'></img></a>
      <div className="signup">
      {/* <Link to="/" type="button" className="btn btn-primary">
        Back
      </Link> */}
      <h3>Sign Up</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label><br></br>
          <input type="text" name="name" autoComplete="off" className='input' onChange={inputHandler} placeholder="Enter your name" /><br></br>
        </div>
        <div className="inputGroup">
          <label>Email:</label><br></br>
          <input type="text" name="email" className='input' autoComplete="off" onChange={inputHandler} placeholder="Enter your email" /><br></br>
        </div>
        <div className="inputGroup">
          <label>Password:</label><br></br>
          <input type="password" name="address" className='input' autoComplete="off" onChange={inputHandler} placeholder="Enter your New password" />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p style={{marginTop:"10px"}}>
            Already have an account? <a style={{color:'black'}} href="/">Login</a>
          </p>
        </div>
      </form>
    </div>
    
    </div>
  )
}

export default Signup;
