import React, { useEffect, useRef, useState } from 'react';
import "./movie.css";
import Navbar from '../navbar/navbar';

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import axios from 'axios';


const captions = [
    "Master",
    "Dragon",
    "Maharaja",
    "Intersteller",
    "Soorarai Potru",
  ];
  
  const cap2=[
    "An alcoholic professor, JD, clashes with a ruthless gangster, Bhavani, after JD takes a teaching job at a juvenile home where Bhavani uses the children for his criminal activities. ",
    "Ragavan, a young man who, after a breakup and facing academic struggles, resorts to forging documents to secure a high-paying job, leading to a journey of self-discovery and redemption. ",
    "a barber, seeking justice for his daughter's ordeal, becomes obsessed with recovering a dustbin, named 'Lakshmi', which he believes holds the key to solving the mystery, leading to a non-linear, revenge-driven narrative. ",
    "In a future Earth facing extinction, a team of astronauts, led by a former NASA pilot, journeys through a wormhole near Saturn to find a new home for humanity, grappling with time, space, and the meaning of love and loss.  ",
    " Nedumaaran Rajangam, a former Air Force pilot, as he embarks on a journey to make air travel affordable for everyone, inspired by the real-life story of Air Deccan founder G.R. Gopinath. "
  ]
  


const Movies = () => {
    const [index, setIndex] = useState(0);
          const images = [img1, img2, img3, img4,img5];
          const carouselRef = useRef(null);
          const carouselRef1 = useRef(null);
          const carouselRef2 = useRef(null);
          const carouselRef3 = useRef(null);
          const carouselRef4 = useRef(null);

          
          const [sports,setsports]=useState([]);
          const [sports1,setsports1]=useState([]);
          const [sports2,setsports2]=useState([]);
          const [sports3,setsports3]=useState([]);

          
        const scrollLeft = () => {
            if (carouselRef.current) {
              carouselRef.current.scrollLeft -= 250; // Adjust scroll amount as needed
            }
          };
        
          const scrollRight = () => {
            if (carouselRef.current) {
              carouselRef.current.scrollLeft += 250;
            }
          };
          const scrollLeft1 = () => {
            if (carouselRef1.current) {
              carouselRef1.current.scrollLeft -= 250; // Adjust scroll amount as needed
            }
          };
        
          const scrollRight1 = () => {
            if (carouselRef1.current) {
              carouselRef1.current.scrollLeft += 250;
            }
          };
          const scrollLeft2 = () => {
            if (carouselRef2.current) {
              carouselRef2.current.scrollLeft -= 250; // Adjust scroll amount as needed
            }
          };
        
          const scrollRight2 = () => {
            if (carouselRef2.current) {
              carouselRef2.current.scrollLeft += 250;
            }
          };
          const scrollLeft3 = () => {
            if (carouselRef3.current) {
              carouselRef3.current.scrollLeft -= 250; // Adjust scroll amount as needed
            }
          };
        
          const scrollRight3 = () => {
            if (carouselRef3.current) {
              carouselRef3.current.scrollLeft += 250;
            }
          };
          const scrollLeft4 = () => {
            if (carouselRef4.current) {
              carouselRef4.current.scrollLeft -= 250; // Adjust scroll amount as needed
            }
          };
        
          const scrollRight4 = () => {
            if (carouselRef4.current) {
              carouselRef4.current.scrollLeft += 250;
            }
          };
        useEffect(() => {
                  const interval = setInterval(() => {
                    setIndex((prevIndex) => (prevIndex + 1) % images.length);
                  }, 5000);
              
                  return () => clearInterval(interval);
                }, [images.length]);

                useEffect(() => {
                    const fetchData = async () => {
                      try {
                        const response = await axios.get("http://localhost:8000/api/movie1s");
                        setsports(response.data);
                      } catch (error) {
                        console.log("Error while fetching data", error);
                      }
                    };
                    fetchData();
                  }, []);

                  useEffect(() => {
                    const fetchData = async () => {
                      try {
                        const response = await axios.get("http://localhost:8000/api/movie2s");
                        setsports1(response.data);
                      } catch (error) {
                        console.log("Error while fetching data", error);
                      }
                    };
                    fetchData();
                  }, []);

                  useEffect(() => {
                    const fetchData = async () => {
                      try {
                        const response = await axios.get("http://localhost:8000/api/movie3s");
                        setsports2(response.data);
                      } catch (error) {
                        console.log("Error while fetching data", error);
                      }
                    };
                    fetchData();
                  }, []);
                  useEffect(() => {
                    const fetchData = async () => {
                      try {
                        const response = await axios.get("http://localhost:8000/api/movie4s");
                        setsports3(response.data);
                      } catch (error) {
                        console.log("Error while fetching data", error);
                      }
                    };
                    fetchData();
                  }, []);


  return (
    <div className='moviebody'>
      <Navbar />
      <section className="slider_section">
        <div className="carousel">
          <div ref={carouselRef}>
            <img id="carimg" src={images[index]} alt={`Slide ${index + 1}`} />
            <div className="overlay">
          <h2>{captions[index]}</h2>
          <p>{cap2[index]}</p>
         <a href="/video4"> <button className="subscribe-btn">WATCH NOW</button>
         </a></div>
          </div>
        </div>
      </section>

      
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Blockbuster Kollywood</h4>

      <div className="carousel-wrappermovie">
      {/* Left Arrow */}
      <button className="arrow left1" onClick={scrollLeft1}>&#10094;</button>

      <div className="carousel-containermovie" ref={carouselRef1}>
      {sports.map((product) => (
              <div key={product._id} className="product">
             <a href="/video4">   <img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardmovie" />
             </a></div>
            ))}
      </div>
      <button className="arrow right1" onClick={scrollRight1}>&#10095;</button>
    </div>
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>PAN India Hits</h4>

<div className="carousel-wrappermovie">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft2}>&#10094;</button>

<div className="carousel-containermovie" ref={carouselRef2}>
{sports1.map((product) => (
        <div key={product._id} className="product">
          <a href="/video4"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardmovie" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight2}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Studios</h4>

<div className="carousel-wrapper">
      {/* Left Arrow */}
      <button className="arrow left" onClick={scrollLeft}>&#10094;</button>

      <div className="carousel-container" ref={carouselRef}>
        <a href="/video4"><div className="card"><img src="./marvel.jpg" alt="Card 1" /></div>
        <div className="card"><img src="./netflix.jpg" alt="Card 2" /></div>
        <div className="card"><img src="./paramount.jpg" alt="Card 3" /></div>
        <div className="card"><img src="./peacock.jpg" alt="Card 4" /></div>
        <div className="card"><img src="./disnep.jpg" alt="Card 5" /></div>
        <div className="card"><img src="./ngo.jpg" alt="Card 6" /></div>
        </a>
      </div>
      <button className="arrow right" onClick={scrollRight}>&#10095;</button>
    </div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}> Movies Based on books</h4>

<div className="carousel-wrappermovie">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>

<div className="carousel-containermovie" ref={carouselRef3}>
{sports2.map((product) => (
        <div key={product._id} className="product">
          <a href="/video4"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardmovie" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Global Cinema</h4>

<div className="carousel-wrappermovie">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft4}>&#10094;</button>

<div className="carousel-containermovie" ref={carouselRef4}>
{sports3.map((product) => (
        <div key={product._id} className="product">
          <a href="/video4"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardmovie" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight4}>&#10095;</button>
</div>
    </div>
  )
}

export default Movies;
