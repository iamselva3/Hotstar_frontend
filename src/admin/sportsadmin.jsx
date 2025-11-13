import React, { useState } from 'react'
import Adminnav from './adminnav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sportsadmin = () => {
    const [productData, setProductData] = useState({ name: "", image: null });
          const [showData, setshowData] = useState({ name: "", image: null });
          const [showData1, setshowData1] = useState({ name: "", image: null });
          const [showData2, setshowData2] = useState({ name: "", image: null });
          const storedUser = JSON.parse(localStorage.getItem("user"));

          let navigate=useNavigate();


                const handleInputChange = (e) => {
                  if (e.target.name === "image") {
                    setProductData({ ...productData, image: e.target.files[0] });
                  } else {
                    setProductData({ ...productData, [e.target.name]: e.target.value });
                  }
                };
              
                const handleAddProduct = async (e) => {
                  e.preventDefault();
                  try {
                    const formData = new FormData();
                    formData.append("name", productData.name);
                    if (productData.image) {
                      formData.append("image", productData.image);
                    }
              
                    const response = await axios.post(
                      "http://localhost:8000/api/sports1_details",
                      formData,
                      { headers: { "Content-Type": "multipart/form-data" } }
                    );
              
                    console.log("Product added:", response.data);
                    navigate("/sportsadmin");
                  } catch (error) {
                    console.error("Error adding product:", error.response?.data || error);
                  }
                };
          
                const handleInputChange1 = (e) => {
                    if (e.target.name === "image") {
                      setshowData({ ...showData, image: e.target.files[0] });
                    } else {
                      setshowData({ ...showData, [e.target.name]: e.target.value });
                    }
                  };
                
                  const handleAddProduct1 = async (e) => {
                    e.preventDefault();
                    try {
                      const formData = new FormData();
                      formData.append("name", showData.name);
                      if (showData.image) {
                        formData.append("image", showData.image);
                      }
                
                      const response = await axios.post(
                        "http://localhost:8000/api/sports2_details",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                      );
                
                      console.log("Product added:", response.data);
                      navigate("/sportsadmin");
                    } catch (error) {
                      console.error("Error adding product:", error.response?.data || error);
                    }
                  };


                  
                  const handleInputChange2 = (e) => {
                    if (e.target.name === "image") {
                      setshowData1({ ...showData1, image: e.target.files[0] });
                    } else {
                      setshowData1({ ...showData1, [e.target.name]: e.target.value });
                    }
                  };
                
                  const handleAddProduct2 = async (e) => {
                    e.preventDefault();
                    try {
                      const formData = new FormData();
                      formData.append("name", showData1.name);
                      if (showData1.image) {
                        formData.append("image", showData1.image);
                      }
                
                      const response = await axios.post(
                        "http://localhost:8000/api/sports3_details",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                      );
                
                      console.log("Product added:", response.data);
                      navigate("/sportsadmin");
                    } catch (error) {
                      console.error("Error adding product:", error.response?.data || error);
                    }
                  };
                  const handleInputChange3 = (e) => {
                    if (e.target.name === "image") {
                      setshowData2({ ...showData2, image: e.target.files[0] });
                    } else {
                      setshowData2({ ...showData2, [e.target.name]: e.target.value });
                    }
                  };
                
                  const handleAddProduct3 = async (e) => {
                    e.preventDefault();
                    try {
                      const formData = new FormData();
                      formData.append("name", showData2.name);
                      if (showData2.image) {
                        formData.append("image", showData2.image);
                      }
                
                      const response = await axios.post(
                        "http://localhost:8000/api/sports4_details",
                        formData,
                        { headers: { "Content-Type": "multipart/form-data" } }
                      );
                
                      console.log("Product added:", response.data);
                      navigate("/sportsadmin");
                    } catch (error) {
                      console.error("Error adding product:", error.response?.data || error);
                    }
                  };
  return (
    <div className='adminbody'>
      <Adminnav />

      <div style={{padding:"20px"}}>
<h4 style={{ marginLeft: "100px",textAlign:"center", marginTop: "0px", color: "white", fontWeight: "bold" }}>
        Hi, {storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}
      </h4>
</div>

      <div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Recommented Show</h2>
  <form
    onSubmit={handleAddProduct}
    style={{
      display: "flex",
      flexDirection: "row", //Horizontal layout
      alignItems: "center",
      gap: "20px", // spacing between form elements
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap" // Optional: to wrap on smaller screens
    }}
  >
    {/* Show Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Name:</label>
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>

   


    {/* Show Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChange}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
        marginTop: "22px" // to align with inputs
      }}
    >
      Add Show
    </button>
  </form>
</div>


<div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Premier League</h2>
  <form
    onSubmit={handleAddProduct1}
    style={{
      display: "flex",
      flexDirection: "row", //Horizontal layout
      alignItems: "center",
      gap: "20px", // spacing between form elements
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap" // Optional: to wrap on smaller screens
    }}
  >
    {/* Show Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Name:</label>
      <input
        type="text"
        name="name"
        value={showData.name}
        onChange={handleInputChange1}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>

   


    {/* Show Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChange1}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
        marginTop: "22px" // to align with inputs
      }}
    >
      Add Show
    </button>
  </form>
</div>

<div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Indian Super league</h2>
  <form
    onSubmit={handleAddProduct2}
    style={{
      display: "flex",
      flexDirection: "row", //Horizontal layout
      alignItems: "center",
      gap: "20px", // spacing between form elements
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap" // Optional: to wrap on smaller screens
    }}
  >
    {/* Show Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Name:</label>
      <input
        type="text"
        name="name"
        value={showData1.name}
        onChange={handleInputChange2}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>

   


    {/* Show Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChange2}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
        marginTop: "22px" // to align with inputs
      }}
    >
      Add Show
    </button>
  </form>
</div>


<div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Recommented Show</h2>
  <form
    onSubmit={handleAddProduct3}
    style={{
      display: "flex",
      flexDirection: "row", //Horizontal layout
      alignItems: "center",
      gap: "20px", // spacing between form elements
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap" // Optional: to wrap on smaller screens
    }}
  >
    {/* Show Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Name:</label>
      <input
        type="text"
        name="name"
        value={showData2.name}
        onChange={handleInputChange3}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>

   


    {/* Show Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Show Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChange3}
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer",
        marginTop: "22px" // to align with inputs
      }}
    >
      Add Show
    </button>
  </form>
</div>


<a href='/'><button
      type="submit"
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
        marginTop: "10px",
        marginLeft:"100vh" // to align with inputs
      }}
    >
      Logout
    </button></a>
    </div>
  )
}

export default Sportsadmin;
