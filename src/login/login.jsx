import React, { useContext, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../App";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setuser } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // <<-- Replace this URL if your Postman URL is different.
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        { name, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // Expecting: { message, user: {...}, token: "..." }
      if (!data || !data.user) {
        toast.error("Login failed — invalid response from server");
        return;
      }

      // Save auth state
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setuser(data.user);

      toast.success("Login successful");
      // admin special-case (you should move this server-side)
      if (name === "admin" && password === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Try again.";
      toast.error(msg);
      console.error("Login error:", err);
    }
  };

  return (
    <div className="body">
      <img src="/Star.png" alt="dh" className="dhlogo" />
      <div className="loginbody">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Enter your username"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="button" type="submit">
            Login
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Don't have an account?
          <b>
            {" "}
            <a style={{ color: "white" }} href="/signup">
              Sign up
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Login;
