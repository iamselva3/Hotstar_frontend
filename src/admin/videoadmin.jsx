import React, { useState } from 'react';
import Adminnav from './adminnav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoAdmin = () => {
  const [videoData, setVideoData] = useState({ name: "", video: null });
  const [videoData1, setVideoData1] = useState({ name: "", video: null });
  const [videoData2, setVideoData2] = useState({ name: "", video: null });
  const [videoData3, setVideoData3] = useState({ name: "", video: null });
  const [videoData4, setVideoData4] = useState({ name: "", video: null });
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleInputChange = (e) => {
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
        `${process.env.REACT_APP_API_URL}/api/video_details`,
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

  const handleInputChange1 = (e) => {
    if (e.target.name === "video") {
      setVideoData1({ ...videoData1, video: e.target.files[0] });
    } else {
      setVideoData1({ ...videoData1, [e.target.name]: e.target.value });
    }
  };

  const handleUploadVideo1 = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", videoData1.name);
      if (videoData1.video) {
        formData.append("video", videoData1.video);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/video1`,
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

  const handleInputChange2 = (e) => {
    if (e.target.name === "video") {
      setVideoData2({ ...videoData2, video: e.target.files[0] });
    } else {
      setVideoData2({ ...videoData2, [e.target.name]: e.target.value });
    }
  };

  const handleUploadVideo2 = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", videoData2.name);
      if (videoData2.video) {
        formData.append("video", videoData2.video);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/video2`,
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

  const handleInputChange3 = (e) => {
    if (e.target.name === "video") {
      setVideoData3({ ...videoData3, video: e.target.files[0] });
    } else {
      setVideoData3({ ...videoData3, [e.target.name]: e.target.value });
    }
  };

  const handleUploadVideo3 = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", videoData3.name);
      if (videoData3.video) {
        formData.append("video", videoData3.video);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/video3`,
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


  const handleInputChange4 = (e) => {
    if (e.target.name === "video") {
      setVideoData4({ ...videoData4, video: e.target.files[0] });
    } else {
      setVideoData4({ ...videoData4, [e.target.name]: e.target.value });
    }
  };

  const handleUploadVideo4 = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", videoData4.name);
      if (videoData4.video) {
        formData.append("video", videoData4.video);
      }

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/video4`,
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




  return (
    <div className="adminbody">
      <Adminnav />

      <div style={{padding:"20px"}}>
<h4 style={{ marginLeft: "100px",textAlign:"center", marginTop: "0px", color: "white", fontWeight: "bold" }}>
        Hi, {storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}
      </h4>
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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


      <div style={{ marginLeft: "200px", color: "white" }}>
        <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Upload TV Video</h2>
        <form
          onSubmit={handleUploadVideo1}
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
              value={videoData1.name}
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

      <div style={{ marginLeft: "200px", color: "white" }}>
        <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Upload Sports Video</h2>
        <form
          onSubmit={handleUploadVideo2}
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
              value={videoData2.name}
              onChange={handleInputChange2}
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
              onChange={handleInputChange2}
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

      <div style={{ marginLeft: "200px", color: "white" }}>
        <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Upload Series Video</h2>
        <form
          onSubmit={handleUploadVideo3}
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
              value={videoData3.name}
              onChange={handleInputChange3}
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
              onChange={handleInputChange3}
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

      <div style={{ marginLeft: "200px", color: "white" }}>
        <h2 style={{ color: "#28a745", marginBottom: "20px" }}>Upload Movie Video</h2>
        <form
          onSubmit={handleUploadVideo4}
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
              value={videoData4.name}
              onChange={handleInputChange4}
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
              onChange={handleInputChange4}
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
  );
};

export default VideoAdmin;
