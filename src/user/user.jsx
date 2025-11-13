import React, { useContext, useEffect, useRef, useState } from "react";
import "./user.css";
import { FaUserEdit } from "react-icons/fa";
import Navbar from "../navbar/navbar";
import axios from "axios";


const UserProfile = () => {
    const carouselRef4 = useRef(null);
    const storedUser = JSON.parse(localStorage.getItem("user"));


    const [sports3,setsports3]=useState([]);


    const [user, setUser] = useState(null);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  fetchUser();
}, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8000/api/series4s");
            setsports3(response.data);
          } catch (error) {
            console.log("Error while fetching data", error);
          }
        };
        fetchData();
      }, []);

    const scrollRight3 = () => {
        if (carouselRef4.current) {
          carouselRef4.current.scrollLeft += 250;
        }
      };
      const scrollLeft3 = () => {
        if (carouselRef4.current) {
          carouselRef4.current.scrollLeft -= 250; // Adjust scroll amount as needed
        }
      };
  return (
    <div className="userbody">
    <div className="user-page">
        <div style={{marginLeft:"-112px",marginTop:"-33px"}}>
        <Navbar />
        </div>
      <div className="user-header">
        <div className="user-info">
          <h3>Subscribe to enjoy Starflix</h3>
          {/* <p>+91 9********8 • sel********@gmail.com</p> */}
          <h3 style={{ marginTop: "30px", fontSize: "20px" }}>
          Welcome {storedUser?. name?.toUpperCase()   || "User"} !!
</h3>
        </div>
        <div className="user-actions">
          <button className="subscribe-btn">Subscribe</button>
          <span className="plan-info">Plans start at ₹299</span>
         <a href="/"> <button className="settings-btn">Log Out</button></a>
        </div>
      </div>

      <div className="profile-section">
        <h4>Profiles</h4>
        <div className="profiles">
          <div className="profile">
            <img src="https://img.icons8.com/color/96/user-male-circle--v1.png" alt="Selva" />
            <p>{storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"} </p>
          </div>
          <div className="profile">
            <img src="https://img.icons8.com/color/96/user-female-circle--v1.png" alt="Kids" />
            <p>Kids</p>
          </div>
          <div className="profile add-profile">
            <span>+</span>
            
          </div>
          <FaUserEdit className="edit-icon" />
        </div>
      </div>

      <div className="watchlist-section">
        <h4>Watchlist</h4>
        <div className="watchlist">
        <div className="carousel-wrapperuser">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>

<div className="carousel-containeruser" ref={carouselRef4}>
{sports3.map((product) => (
        <div key={product._id} className="product">
          <img src={`http://localhost:8000${product.image}`} alt={product.name} className="carduser" />
        </div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
