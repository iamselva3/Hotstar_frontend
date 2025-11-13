import React, { useEffect, useRef, useState } from 'react';
import "./tv.css";
import Navbar from '../navbar/navbar';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import axios from 'axios';


const captions = [
    "Watch IPL Live",
    "Neeya Naana",
    "Jodi Are You Ready?",
    "Master Chef - Australia",
    "David Blaine - Do Not Attempt",
  ];
  
  const cap2=[
    "Match Replay with Techno brings commentary from Al driven avatar with fiery reactions, insights, and POVs during IPL replays. A next-level experience awaits!",
    "A talk show where two polarised groups of society are given the platform to share their views and see a different perspective on socially-relevant topics.",
    " Twelve dynamic talents, one epic dance spectacle! With stellar judges Sandy Master, Rambha and Sridevi on board, get ready for a fierce dance-off.",
    "Top Australian chefs judge passionate home cooks who participate in competitive culinary challenges to develop their cooking skills and win the title. ",
    "David Blaine Do Not Attempt follows the magician as he travels in search of extraordinary people who perform real feats that look like magic. "
  ]
  
const Tv = () => {
    const [index, setIndex] = useState(0);
      const images = [img1, img2, img3, img4,img5];
      const carouselRef = useRef(null);
        const carouselRef1 = useRef(null);
        const carouselRef2=useRef(null);
        const carouselRef3=useRef(null);

        const [products, setProducts] = useState([]);
        const [show1,setshow1]=useState([]);
        const [show2,setshow2]=useState([]);


        const scrollLeft = () => {
          if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 250; // Adjust scroll amount as needed
          }
        };
        const storedUser = JSON.parse(localStorage.getItem("user"));
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

      useEffect(() => {
          const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 5000);
      
          return () => clearInterval(interval);
        }, [images.length]);
      
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get("http://localhost:8000/api/tv1s");
                setProducts(response.data);
              } catch (error) {
                console.log("Error while fetching data", error);
              }
            };
            fetchData();
          }, []);


          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get("http://localhost:8000/api/tv2s");
                setshow1(response.data);
              } catch (error) {
                console.log("Error while fetching data", error);
              }
            };
            fetchData();
          }, []);

          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get("http://localhost:8000/api/tv3s");
                setshow2(response.data);
              } catch (error) {
                console.log("Error while fetching data", error);
              }
            };
            fetchData();
          }, []);


  return (
    <div className='tvbody'>
      <Navbar />
      <section className="slider_section">
        <div className="carousel">
          <div ref={carouselRef}>
            <img id="carimg" src={images[index]} alt={`Slide ${index + 1}`} />
            <div className="overlay">
          <h2>{captions[index]}</h2>
          <p>{cap2[index]}</p>
         <a href="/video1"> <button className="subscribe-btn">WATCH NOW</button></a>
        </div>
          </div>
        </div>
      </section>


      <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Shows recommented for you  {storedUser?.name?.toUpperCase() || "USER"} ❤</h4>

      <div className="carousel-wrappertv">
      {/* Left Arrow */}
      <button className="arrow left1" onClick={scrollLeft1}>&#10094;</button>

      <div className="carousel-containertv" ref={carouselRef1}>
      {products.map((product) => (
              <div key={product._id} className="product">
                <a href="/video1"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardtv" />
                </a> </div>
            ))}
      </div>
      <button className="arrow right1" onClick={scrollRight1}>&#10095;</button>
    </div>
   

    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Kids Shows</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft2}>&#10094;</button>

<div className="carousel-containertv" ref={carouselRef2}>
{show1.map((product) => (
        <div key={product._id} className="product">
          <a href="/video1"><img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardtv" />
          </a> </div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight2}>&#10095;</button>
</div>

<h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Popular Channels</h4>

<div className="carousel-wrapper">
      {/* Left Arrow */}
      <button className="arrow left" onClick={scrollLeft}>&#10094;</button>

      <div className="carousel-container" ref={carouselRef}>
        <a href="/video1"><div className="card"><img src="./vijay.jpg" alt="Card 1" className='img3' /></div>
        <div className="card"><img src="./colors.jpg" alt="Card 2" className='img3' /></div>
        <div className="card"><img src="./sun.jpg" alt="Card 3" className='img3' /></div>
        <div className="card"><img src="./world.jpg" alt="Card 4" className='img3' /></div>
        <div className="card"><img src="./zee.jpg" alt="Card 5" className='img3' /></div>
        <div className="card"><img src="./sunmusic.jpg" alt="Card 5" className='img3' /></div>
        </a></div>
      <button className="arrow right" onClick={scrollRight}>&#10095;</button>
    </div>

    <h4 style={{marginLeft:"130px",marginTop:"20px",color:"white",fontWeight:"bold"}}>Thriller Shows</h4>

<div className="carousel-wrappertv">
{/* Left Arrow */}
<button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>

<div className="carousel-containertv" ref={carouselRef3}>
{show2.map((product) => (
        <div key={product._id} className="product">
         <a href="video1"> <img src={`http://localhost:8000${product.image}`} alt={product.name} className="cardtv" />
         </a></div>
      ))}
</div>
<button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
</div>
    </div>
  )
}

export default Tv;
