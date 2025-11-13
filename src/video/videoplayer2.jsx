import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomMoviePage2 = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [randomVideo, setRandomVideo] = useState(null);

  // Fetch a random video
  useEffect(() => {
    const fetchRandomVideo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/video2");
        const videos = response.data;
        if (videos.length > 0) {
          const random = videos[Math.floor(Math.random() * videos.length)];
          setRandomVideo(random);
        }
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    };

    fetchRandomVideo();
  }, []);

  // Fetch a random movie name
  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/sports1s");
        const movies = response.data;
        if (movies.length > 0) {
          const random = movies[Math.floor(Math.random() * movies.length)];
          setRandomMovie(random);
        }
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchRandomMovie();
  }, []);

  return (
    <div style={{ textAlign: "center", background: "#000", color: "#fff", padding: "30px", height: "120vh" }}>
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>Enjoy Watching</h2>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {randomVideo ? (
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            style={{ borderRadius: "10px" }}
          >
            <source src={`http://localhost:8000${randomVideo.video}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}

        {randomMovie && (
          <h3 style={{ marginTop: "20px", fontSize: "24px" }}>
            Now Showing: <span style={{ color: "#FFD700" }}>{randomMovie.name}</span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default RandomMoviePage2;
