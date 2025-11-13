import React, { useEffect, useRef, useState } from 'react';
import "./sports.css";
import Navbar from '../navbar/navbar';

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import axios from 'axios';


const captions = [
    "Watch IPL Live",
    "IPL DAMAKKA",
    "Best In the week",
    "KKR's Rage",
    "LSG's Master Piece",
  ];
  
  const cap2=[
    "Watch the live stream of the TATA IPL 2025 match between Kolkata Knight Riders and Lucknow Super Giants",
    "Watch the live stream of the TATA IPL 2025 match between Chennai Super Kings and Punjab Kings",
    "Royal Challengers Bengaluru pulled off a nervy win over rivals Mumbai Indians to end their 10-year drought at the Wankhede Stadium in TATA IPL 2025",
    "Kolkata Knight Riders put themselves in a comfortable position despite losing a wicket in the powerplay against Lucknow Super Giants in TATA IPL 2025",
    "Nicolas Pooran played a fiery knock of 87* to take Lucknow Super Giants to a mammoth total against Kolkata Knight Riders in TATA IPL 2025 "
  ]
  


const Sports = () => {
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
                }, []);

                useEffect(() => {
                    const fetchData = async () => {
                      try {
                        const response = await axios.get("http://localhost:8000/api/sports1s");
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
                        const response = await axios.get("http://localhost:8000/api/sports2s");
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
                        const response = await axios.get("http://localhost:8000/api/sports3s");
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
                        const response = await axios.get("http://localhost:8000/api/sports4s");
                        setsports3(response.data);
                      } catch (error) {
                        console.log("Error while fetching data", error);
                      }
                    };
                    fetchData();
                  }, []);


  return (
    <div className='sportsbody'>
      <Navbar />
      <section className="slider_section">
        <div className="carousel">
          <div ref={carouselRef}>
            <img id="carimg" src={images[index]} alt={`Slide ${index + 1}`} />
            <div className="overlay">
          <h2>{captions[index]}</h2>
          <p>{cap2[index]}</p>
        <a href="/video2">  <button className="subscribe-btn">WATCH NOW</button>
        </a></div>
          </div>
        </div>
      </section>

      <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Popular Tournaments</h4>

<div className="carousel-wrapper">
      {/* Left Arrow */}
      <button className="arrow left" onClick={scrollLeft}>&#10094;</button>

      <div className="carousel-container" ref={carouselRef}>
        <a href="video2"><div className="card"><img src="./ipl.jpg" alt="Card 1" /></div>
        <div className="card"><img src="./pl.jpg" alt="Card 2" /></div>
        <div className="card"><img src="./isl.jpg" alt="Card 3" /></div>
        <div className="card"><img src="./icc.jpg" alt="Card 4" /></div>
        <div className="card"><img src="./ct.jpg" alt="Card 5" /></div>
        <div className="card"><img src="./bwf.jpg" alt="Card 6" /></div>
        </a>
      </div>
      <button className="arrow right" onClick={scrollRight}>&#10095;</button>
    </div>
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Rivalry Week</h4>

      <div className="carousel-wrappertv">
      {/* Left Arrow */}
      <button className="arrow left1" onClick={scrollLeft1}>&#10094;</button>

      <div className="carousel-containersports" ref={carouselRef1}>
      {sports.map((product) => (
              <div key={product._id} className="product">
                <a href="/video2"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
                </a></div>
            ))}
      </div>
      <button className="arrow right1" onClick={scrollRight1}>&#10095;</button>
    </div>
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Premier League</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft2}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef2}>
{sports1.map((product) => (
        <div key={product._id} className="product">
          <a href="/video2"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight2}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}> Indian Super league</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef3}>
{sports2.map((product) => (
        <div key={product._id} className="product">
          <a href="/video2"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>BWF All England Open 2025</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft4}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef4}>
{sports3.map((product) => (
        <div key={product._id} className="product">
          <a href="/video2"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight4}>&#10095;</button>
</div>
    </div>
  )
}

export default Sports;
