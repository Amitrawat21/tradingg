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

      <div className="description"style={{ backgroundImage: `url(${backgroundImg2})`,backgroundSize: "cover" }} >
        <div className="heading">
          <h1 className="simple-shadow workshop">Click Here For Next Month's Workshop</h1>
          <Link to= "/workshop">
          <button className="button" onClick={showForm}>
            Click to register
          </button>
          </Link>
         
        </div>
        {/* <p className="simple-shadow">Register For Trabot MemberShip</p> */}
      </div>
     
    </div>
  );
};

export default Home;
