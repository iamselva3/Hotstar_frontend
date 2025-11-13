import React, { useContext, useEffect, useRef, useState } from 'react';
import "./home.css"
import Navbar from '../navbar/navbar';
import { Context } from '../App';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import axios from 'axios';

const captions = [
  "Indian Premiur League",
  "Mufasa:The Lion King",
  "Premalu",
  "Lover",
  "Game Of Thrones",
];

const cap2 = [
  "The Indian Premier League (IPL), a professional Twenty20 cricket league, began in 2008 and has grown into a global phenomenon, attracting top players and generating significant revenue. ",
  "Simba's father, who is tragically killed by his younger brother Scar in a plot to usurp the throne, leading to Simba's exile and Mufasa's spirit guiding him later. ",
  "Sachin, an engineering graduate who, after a failed love confession and a visa rejection, relocates to Hyderabad, where he meets and falls for Reenu, navigating a love triangle with her work colleague, Aadhi. ",
  "Arun and Divya, whose six-year relationship starts to unravel as they drift apart, raising questions about whether their love can withstand their differences. ",
  "A Game of Thrones follows a power struggle for the Iron Throne in the fictional world of Westeros and Essos, as various noble families fight for control amidst threats from an ancient enemy and the looming winter. "
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = [img5, img1, img2, img3, img4];
  const carouselRef = useRef(null);
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const [products, setProducts] = useState([]);
  const [Movies, setMovies] = useState([]);
  const [gbm, setgbm] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const scrollLeft4 = () => {
    if (carouselRef3.current) {
      carouselRef3.current.scrollLeft -= 250;
    }
  };

  const scrollRight4 = () => {
    if (carouselRef3.current) {
      carouselRef3.current.scrollLeft += 250;
    }
  };

  const scrollLeft3 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollLeft -= 250;
    }
  };

  const scrollRight3 = () => {
    if (carouselRef2.current) {
      carouselRef2.current.scrollLeft += 250;
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 250;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 250;
    }
  };

  const scrollLeft1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.scrollLeft -= 250;
    }
  };

  const scrollRight1 = () => {
    if (carouselRef1.current) {
      carouselRef1.current.scrollLeft += 250;
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
        const response = await axios.get("http://localhost:8000/api/products");
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
        const response = await axios.get("http://localhost:8000/api/movies");
        setMovies(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/gbms");
        setgbm(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='homebody'>
      <Navbar />
      <section className="slider_section">
        <div className="carousel">
          <div ref={carouselRef}>
            <img id="carimg" src={images[index]} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <h2>{captions[index]}</h2>
              <p>{cap2[index]}</p>
             <a href='/video'> <button className="subscribe-btn">WATCH NOW</button></a>
            </div>
          </div>
        </div>
      </section>

      <h4 style={{ marginLeft: "130px", marginTop: "20px", color: "white", fontWeight: "bold" }}>
        Welcome back, {storedUser?.name?.charAt(0).toUpperCase() + storedUser?.name?.slice(1).toLowerCase() || "User"}
      </h4>

      {/* First Carousel */}
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>&#10094;</button>
        <div className="carousel-container" ref={carouselRef}>
          <a href='/video'>
            <div className="card"><img src="./1.jpg" alt="Card 1" className='img3' /></div>
            <div className="card"><img src="./2.jpg" alt="Card 2" className='img3' /></div>
            <div className="card"><img src="./3.jpg" alt="Card 3" className='img3' /></div>
            <div className="card"><img src="./4.jpg" alt="Card 4" className='img3' /></div>
            <div className="card"><img src="./5.jpg" alt="Card 5" className='img3' /></div>
            <div className="card"><img src="./6.jpg" alt="Card 6" className='img3' /></div>
          </a>
        </div>
        <button className="arrow right" onClick={scrollRight}>&#10095;</button>
      </div>

      {/* Products */}
      <h4 style={{ marginLeft: "130px", marginTop: "20px", color: "white", fontWeight: "bold" }}>Top Movies</h4>
      <div className="carousel-wrapper1">
        <button className="arrow left1" onClick={scrollLeft1}>&#10094;</button>
        <div className="carousel-container1" ref={carouselRef1}>
          {products.map((product) => (
            <div key={product._id} className="product">
              <a href='/video'>
                <img src={`http://localhost:8000${product.image}`} alt={product.name} className="card1" />
              </a>
            </div>
          ))}
        </div>
        <button className="arrow right1" onClick={scrollRight1}>&#10095;</button>
      </div>

      {/* Marvel */}
      <h4 style={{ marginLeft: "130px", marginTop: "20px", color: "white", fontWeight: "bold" }}>Marvel</h4>
      <div className="carousel-wrapper1">
        <button className="arrow left1" onClick={scrollLeft3}>&#10094;</button>
        <div className="carousel-container1" ref={carouselRef2}>
          {Movies.map((movie) => (
            <div key={movie._id} className="product">
              <a href='/video'>
                <img src={`http://localhost:8000${movie.image}`} alt={movie.name} className="card1" />
              </a>
            </div>
          ))}
        </div>
        <button className="arrow right1" onClick={scrollRight3}>&#10095;</button>
      </div>

      {/* Global Movie Hits */}
      <h4 style={{ marginLeft: "130px", marginTop: "20px", color: "white", fontWeight: "bold" }}>Global Movie Hits</h4>
      <div className="carousel-wrapper1">
        <button className="arrow left1" onClick={scrollLeft4}>&#10094;</button>
        <div className="carousel-container1" ref={carouselRef3}>
          {gbm.map((gbms) => (
            <div key={gbms._id} className="product">
              <a href='/video'>
                <img src={`http://localhost:8000${gbms.image}`} alt={gbms.name} className="card1" />
              </a>
            </div>
          ))}
        </div>
        <button className="arrow right1" onClick={scrollRight4}>&#10095;</button>
      </div>
    </div>
  );
};

export default Home;
