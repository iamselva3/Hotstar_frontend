import React, { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "./utils/axiosInstance.js";
import { Context } from "../App";

const ProtectedRoute = ({ children }) => {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);
  const { setuser } = useContext(Context);

  useEffect(() => {
    let mounted = true;

    const validate = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          if (mounted) setAuthed(false);
          return;
        }

        // call your protected endpoint that returns the logged user
        const { data } = await axios.get("/api/users/user/profile");
        if (mounted && data) {
          setuser(data);
          setAuthed(true);
        }
      } catch (err) {
        // invalid token or network error -> not authed
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        if (mounted) setAuthed(false);
      } finally {
        if (mounted) setChecking(false);
      }
    };

    validate();
    return () => { mounted = false; };
  }, [setuser]);

  if (checking) return null; // or return a spinner component

  if (!authed) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
