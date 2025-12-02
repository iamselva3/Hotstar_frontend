import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import Login from './login/login';
import Signup from './signup/signup';
import Home from './home/home';
import Admin from './admin/admin';
import Tv from './Tv/tv';
import Tvadmin from './admin/tvadmin';
import Sports from './sports/sports';
import Sportsadmin from './admin/sportsadmin';
import Seriesadmin from './admin/seriesadmin';
import Series from './series/series';
import Movies from './movies/movie';
import Movieadmin from './admin/movieadmin';
import UserProfile from './user/user';
import RandomMoviePage from './video/videoplayer';
import VideoAdmin from './admin/videoadmin';
import RandomMoviePage1 from './video/videoplayer1';
import RandomMoviePage2 from './video/videoplayer2';
import RandomMoviePage3 from './video/videoplayer3';
import RandomMoviePage4 from './video/videoplayer4';
import { ToastContainer } from 'react-toastify';


export const Context = React.createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/home",
    element: <Home />
  }, {
    path: "/admin",
    element: <Admin />
  }, {
    path: "/tv",
    element: <Tv />
  }, {
    path: "/tvadmin",
    element: <Tvadmin />
  }, {
    path: "/sports",
    element: <Sports />
  }, {
    path: "/sportsadmin",
    element: <Sportsadmin />
  }, {
    path: "/seriesadmin",
    element: <Seriesadmin />
  }, {
    path: "/series",
    element: <Series />
  }, {
    path: "/movies",
    element: <Movies />
  }, {
    path: "/movieadmin",
    element: <Movieadmin />
  }, {
    path: "/user",
    element: <UserProfile />
  }, {
    path: "/video",
    element: <RandomMoviePage />
  }, {
    path: "/videoadmin",
    element: <VideoAdmin />
  }, {
    path: "/video1",
    element: <RandomMoviePage1 />
  }, {
    path: "/video2",
    element: <RandomMoviePage2 />
  }, {
    path: "video3",
    element: <RandomMoviePage3 />
  }, {
    path: "/video4",
    element: <RandomMoviePage4 />
  }

]);

function App() {

  const [user, setuser] = useState("");
  const [page, setPage] = useState("/login");
  const [cart, setCart] = useState([]);
  console.log(page);
  return (
    <div className="App">

      <header className="App-header">
        <Context.Provider value={{ user, setuser, setPage, cart, setCart }}>
          <ToastContainer position="top-right" autoClose={2000} />
          <RouterProvider router={router} />
        </Context.Provider>
      </header>

    </div>
  );
}

export default App;