import React, { useState } from "react";
import "./Home.css";
import backgroundImg from "../../Assest/horizontal.png";
import backgroundImg2 from "../../Assest/greylap.png";
import Navbar from "../../component/Navbar/Navbar";
import Contact from "../../component/Navbar/Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const showForm = () => {
    setShowContact(true);
  };
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Navbar />
      <div className="home-sub-container">
        <div className="heading">
          <h5 className="home-paragraphh">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           
       
          </h5>
          <Link to="/Form">
            <button className="button" onClick={showForm}>
              Click to register
            </button>
          </Link>
        </div>
        <div
          className="description"
          style={{
            backgroundImage: `url(${backgroundImg2})`,
            backgroundSize: "cover",
            
          }}
        >
          {/* <p className="simple-shadow">Register For Trabot MemberShip</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
