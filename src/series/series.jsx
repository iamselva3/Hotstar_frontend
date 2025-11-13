import React, { useEffect, useRef, useState } from 'react';
import "./series.css";
import Navbar from '../navbar/navbar';

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import axios from 'axios';


const captions = [
    "Money Heist",
    "The 100",
    "Breaking Bad",
    "Peaky Blinders",
    "The Good Doctor",
  ];
  
  const cap2=[
    "A Spanish heist crime drama series following a brilliant criminal mastermind, The Professor, who plans and executes two elaborate heists: one at the Royal Mint of Spain and another at the Bank of Spain, involving a team of skilled thieves and hostages.",
    "A group of juvenile delinquents sent from a space station to a post-apocalyptic Earth to determine if it's habitable, where they encounter survivors and must fight to survive and rebuild humanity.",
    "A mild-mannered high school chemistry teacher, Walter White, who, after being diagnosed with cancer, turns to manufacturing and selling crystal meth with a former student to secure his family's future, ultimately becoming a dangerous drug lord",
    "The rise of the Shelby family, a criminal gang led by the ambitious Tommy Shelby, as they navigate the turbulent post-World War I era in Birmingham, England, through crime, violence, and political intrigue. ",
    "Shaun Murphy, an autistic young surgeon with savant syndrome, as he navigates the challenges of working in a prestigious hospital while using his extraordinary medical skills to save lives and challenge his colleagues' skepticism. "
  ]
  


const Series = () => {
    const [index, setIndex] = useState(0);
          const images = [img1, img2, img3, img4,img5];
          const carouselRef = useRef(null);
          const carouselRef1 = useRef(null);
          const carouselRef2 = useRef(null);
          const carouselRef3 = useRef(null);
          const carouselRef4 = useRef(null);
          const storedUser = JSON.parse(localStorage.getItem("user"));
          
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
                        const response = await axios.get("http://localhost:8000/api/series1s");
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
                        const response = await axios.get("http://localhost:8000/api/series2s");
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
                        const response = await axios.get("http://localhost:8000/api/series3s");
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
                        const response = await axios.get("http://localhost:8000/api/series4s");
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
          <a href="/video3"><button className="subscribe-btn">WATCH NOW</button>
          </a></div>
          </div>
        </div>
      </section>

      
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Best choices for {storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}</h4>

      <div className="carousel-wrappertv">
      {/* Left Arrow */}
      <button className="arrow left1" onClick={scrollLeft1}>&#10094;</button>

      <div className="carousel-containersports" ref={carouselRef1}>
      {sports.map((product) => (
              <div key={product._id} className="product">
              <a href="/video3">  <img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
              </a></div>
            ))}
      </div>
      <button className="arrow right1" onClick={scrollRight1}>&#10095;</button>
    </div>
    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Made In India</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft2}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef2}>
{sports1.map((product) => (
        <div key={product._id} className="product">
         <a href="/video3"> <img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
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
        <a href="/video3"><div className="card"><img src="./marvel.jpg" alt="Card 1" /></div>
        <div className="card"><img src="./netflix.jpg" alt="Card 2" /></div>
        <div className="card"><img src="./paramount.jpg" alt="Card 3" /></div>
        <div className="card"><img src="./peacock.jpg" alt="Card 4" /></div>
        <div className="card"><img src="./disnep.jpg" alt="Card 5" /></div>
        <div className="card"><img src="./ngo.jpg" alt="Card 6" /></div>
        </a>
      </div>
      <button className="arrow right" onClick={scrollRight}>&#10095;</button>
    </div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}> Tv Shows Based on books</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef3}>
{sports2.map((product) => (
        <div key={product._id} className="product">
          <a href="/video3"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>{storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}'s List</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft4}>&#10094;</button>

<div className="carousel-containersports" ref={carouselRef4}>
{sports3.map((product) => (
        <div key={product._id} className="product">
          <a href="/video3"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardsports" />
          </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight4}>&#10095;</button>
</div>
    </div>
  )
}

export default Series;
