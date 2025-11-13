import React, { useEffect, useState } from 'react'
import Adminnav from './adminnav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tvadmin = () => {

      const [productData, setProductData] = useState({ name: "", image: null });
      const [showData, setshowData] = useState({ name: "", image: null });
      const [showData1, setshowData1] = useState({ name: "", image: null });
      const storedUser = JSON.parse(localStorage.getItem("user"));

      const [products, setProducts] = useState([]);
      const [show1,setshow1] = useState([]);
      const [show2,setshow2]=useState([]);
      const navigate = useNavigate();
      // const [products, setProducts] = useState([]);


      useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tv1s`);
              setProducts(response.data);
            } catch (error) {
              console.log("Error while f etching data", error);
            }
          };
          fetchData();
        }, []);


        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tv2s`);
              setshow1(response.data);
            } catch (error) {
              console.log("Error while f etching data", error);
            }
          };
          fetchData();
        }, []);

        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tv3s`);
              setshow2(response.data);
            } catch (error) {
              console.log("Error while f etching data", error);
            }
          };
          fetchData();
        }, []);



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
            `${process.env.REACT_APP_API_URL}/api/tv1_details`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
    
          console.log("Product added:", response.data);
          navigate("/tvadmin");
        } catch (error) {
          console.error("Error adding product:", error.response?.data || error);
        }
      };
    

      const handleInputshow = (e) => {
        if (e.target.name === "image") {
          setshowData({ ...showData, image: e.target.files[0] });
        } else {
          setshowData({ ...showData, [e.target.name]: e.target.value });
        }
      };
    
      const handleAddshow = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("name", showData.name);
          if (showData.image) {
            formData.append("image", showData.image);
          }
    
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/tv2_details`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
    
          console.log("Product added:", response.data);
          navigate("/tvadmin");
        } catch (error) {
          console.error("Error adding product:", error.response?.data || error);
        }
      };
    
      const handleInputshow1 = (e) => {
        if (e.target.name === "image") {
          setshowData1({ ...showData1, image: e.target.files[0] });
        } else {
          setshowData1({ ...showData1, [e.target.name]: e.target.value });
        }
      };
    
      const handleAddshow1 = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("name", showData1.name);
          if (showData1.image) {
            formData.append("image", showData1.image);
          }
    
          const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/tv3_details`,
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
    
          console.log("Product added:", response.data);
          navigate("/tvadmin");
        } catch (error) {
          console.error("Error adding product:", error.response?.data || error);
        }
      };
    


      const deleteProduct = async (productId) => {
          await axios
            .delete(`${process.env.REACT_APP_API_URL}/api/delete/tv1/${productId}`)
            .then(() => {
              setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
            })
            .catch((error) => {
              console.log(error);
            });
        }; 

        const deletethriller = async (productId) => {
          await axios
            .delete(`${process.env.REACT_APP_API_URL}/api/delete/tv3/${productId}`)
            .then(() => {
              setshow2((prevProducts) => prevProducts.filter((product) => product._id !== productId));
            })
            .catch((error) => {
              console.log(error);
            });
        }; 

        const deleteshow1 = async (productId) => {
          await axios
            .delete(`${process.env.REACT_APP_API_URL}/api/delete/tv2/${productId}`)
            .then(() => {
              setshow1((prevProducts) => prevProducts.filter((product) => product._id !== productId));
            })
            .catch((error) => {
              console.log(error);
            });
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
<div className='userTable' >
      <table className='table table-bordered' >
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th> 
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                {product.image ? (
                  <img 
                    src={`${process.env.REACT_APP_API_URL}${product.image}`} 
                    alt="User" 
                    width="50" 
                    height="50" 
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  "No Image Available"
                )}
              </td>
              <td>
               
                <button
                  onClick={() => deleteProduct(product._id)}
                  type="button"
                  className="btn btn-danger"
                >Delete
                  {/* <i className="fa-solid fa-trash"></i> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


{/* Show 1 */}
      
    </div>
    <div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Recommented Show</h2>
  <form
    onSubmit={handleAddshow}
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
        onChange={handleInputshow}
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
        onChange={handleInputshow}
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


<div className='userTable' >
      <table className='table table-bordered' >
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th> 
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {show1.map((product, index) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                {product.image ? (
                  <img 
                    src={`${process.env.REACT_APP_API_URL}${product.image}`} 
                    alt="User" 
                    width="50" 
                    height="50" 
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  "No Image Available"
                )}
              </td>
              <td>
               
                <button
                  onClick={() => deleteshow1(product._id)}
                  type="button"
                  className="btn btn-danger"
                >Delete
                  {/* <i className="fa-solid fa-trash"></i> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


{/* Show 1 */}
      
    </div>


    <div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Thiriller Show</h2>
  <form
    onSubmit={handleAddshow1}
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
        onChange={handleInputshow1}
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
        onChange={handleInputshow1}
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

    
<div className='userTable' >
      <table className='table table-bordered' >
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>Name</th> 
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {show2.map((product, index) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                {product.image ? (
                  <img 
                    src={`${process.env.REACT_APP_API_URL}${product.image}`} 
                    alt="User" 
                    width="50" 
                    height="50" 
                    style={{ borderRadius: "50%" }}
                  />
                ) : (
                  "No Image Available"
                )}
              </td>
              <td>
               
                <button
                  onClick={() => deletethriller(product._id)}
                  type="button"
                  className="btn btn-danger"
                >Delete
                  {/* <i className="fa-solid fa-trash"></i> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


{/* Show 1 */}
      
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

export default Tvadmin;
