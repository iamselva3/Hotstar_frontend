import React, { useEffect, useState } from 'react';
import "./admin.css"
import axios from "axios";
import Adminnav from './adminnav';
import { useNavigate } from "react-router-dom";

const Admin = () => {

  // const navigate = useNavigate();
  // const [productData, setProductData] = useState({ name: "", price: "", image: null });
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [productData, setProductData] = useState({ name: "", image: null });
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState({ name: "", video: null });


  
  const handleInputChange1 = (e) => {
    if (e.target.name === "video") {
      setVideoData({ ...videoData, video: e.target.files[0] });
    } else {
      setVideoData({ ...videoData, [e.target.name]: e.target.value });
    }
  };

  const handleUploadVideo = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", videoData.name);
      if (videoData.video) {
        formData.append("video", videoData.video);
      }

      const response = await axios.post(
        "http://localhost:8000/api/video_details",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Video uploaded:", response.data);
      navigate("/videoadmin"); // Optional: refresh or redirect
    } catch (error) {
      console.error("Error uploading video:", error.response?.data || error);
    }
  };

  // const [products, setProducts] = useState([]);

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
        "http://localhost:8000/api/product_details",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Product added:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error);
    }
  };

  const [gbmData,setgbmData]= useState({ name: "", image: null });

  const handleInputChangegbm = (e) => {
    if (e.target.name === "image") {
      setgbmData({ ...gbmData, image: e.target.files[0] });
    } else {
      setgbmData({ ...gbmData, [e.target.name]: e.target.value });
    }
  };

  const handleAddgbm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", gbmData.name);
      if (gbmData.image) {
        formData.append("image", gbmData.image);
      }

      const response = await axios.post("http://localhost:8000/api/gbm_details", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Movie added:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Error adding movie:", error.response?.data || error);
    }
  };

  const [movieData, setMovieData] = useState({ name: "", image: null });

  const handleInputChangemovie = (e) => {
    if (e.target.name === "image") {
      setMovieData({ ...movieData, image: e.target.files[0] });
    } else {
      setMovieData({ ...movieData, [e.target.name]: e.target.value });
    }
  };

  const deleteProduct = async (productId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/product/${productId}`)
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  }; 


  const handleAddMovie = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", movieData.name);
      if (movieData.image) {
        formData.append("image", movieData.image);
      }

      const response = await axios.post("http://localhost:8000/api/movie_details", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Movie added:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error("Error adding movie:", error.response?.data || error);
    }
  };


  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error while f etching data", error);
      }
    };
    fetchData();
  }, []);


  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/movies");
        setmovies(response.data);
      } catch (error) {
        console.log("Error while f etching data", error);
      }
    };
    fetchData();
  }, []);



  const [gbm, setgbm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/gbms");
        setgbm(response.data);
      } catch (error) {
        console.log("Error while f etching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct1 = async (productId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/movie/${productId}`)
      .then(() => {
        setmovies((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const deleteProduct2 = async (productId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/gbm/${productId}`)
      .then(() => {
        setgbm((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='adminbody'>
      <Adminnav />
      <div>
      
      {/* <Link to="/videoadmin">Hi</Link> */}

<div style={{padding:"20px"}}>
<h4 style={{ marginLeft: "100px",textAlign:"center", marginTop: "0px", color: "white", fontWeight: "bold" }}>
        Hi, {storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}
      </h4>
</div>
      <div style={{ marginLeft: "200px", color: "white" }}>
       
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Show</h2>
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
        <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Upload New Video</h2>
        <form
          onSubmit={handleUploadVideo}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "black",
            flexWrap: "wrap"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
            <label style={{ fontWeight: "bold" }}>Video Title:</label>
            <input
              type="text"
              name="name"
              value={videoData.name}
              onChange={handleInputChange1}
              required
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
            <label style={{ fontWeight: "bold" }}>Select Video:</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleInputChange1}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#28a745",
              color: "white",
              cursor: "pointer",
              marginTop: "22px"
            }}
          >
            Upload Video
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
                    src={`http://localhost:8000${product.image}`} 
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
    </div>





<div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Marvel Movie</h2>
  <form
    onSubmit={handleAddMovie}
    style={{
      display: "flex",
      flexDirection: "row", // 👈 Key: Horizontal layout
      alignItems: "flex-end",
      gap: "20px", // spacing between items
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap", // optional for responsive layout
    }}
  >
    {/* Movie Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Movie Name:</label>
      <input
        type="text"
        name="name"
        value={movieData.name}
        onChange={handleInputChangemovie}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "200px"
        }}
      />
    </div>

    {/* Movie Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Movie Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChangemovie}
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
        marginTop: "22px" // aligns with inputs
      }}
    >
      Add Movie
    </button>
  </form>
</div>


<div className='userTable'>
      <table className='table table-bordered' id='table'>
        <thead>
          <tr>
            <th>Name</th> 
            <th>Poster</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td>
                {movie.image ? (
                  <img 
                    src={`http://localhost:8000${movie.image}`} 
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
                  onClick={() => deleteProduct1(movie._id)}
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
    </div>



    <div style={{ marginLeft: "200px", color: "white" }}>
  <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Add New Marvel Movie</h2>
  <form
    onSubmit={handleAddgbm}
    style={{
      display: "flex",
      flexDirection: "row", //  Key: Horizontal layout
      alignItems: "flex-end",
      gap: "20px", // spacing between items
      padding: "20px",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "black",
      flexWrap: "wrap", // optional for responsive layout
    }}
  >
    {/* Movie Name */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Movie Name:</label>
      <input
        type="text"
        name="name"
        value={gbmData.name}
        onChange={handleInputChangegbm}
        required
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "200px"
        }}
      />
    </div>

    {/* Movie Poster */}
    <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
      <label style={{ fontWeight: "bold" }}>Movie Poster:</label>
      <input
        type="file"
        name="image"
        onChange={handleInputChangegbm}
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
        marginTop: "22px" // aligns with inputs
      }}
    >
      Add Movie
    </button>
  </form>
</div>
<div className='userTable'>
      <table className='table table-bordered' id='table'>
        <thead>
          <tr>
            <th>Name</th> 
            <th>Poster</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gbm.map((movie, index) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td>
                {movie.image ? (
                  <img 
                    src={`http://localhost:8000${movie.image}`} 
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
                  onClick={() => deleteProduct2(movie._id)}
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
     </div>
  )
}

export default Admin;
