import React from "react";
import "./Workshop.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import backgroundImg from "../../Assest/horizontal.png";
const Workshop = () => {
  return (
    <div className="workshop">
      <h1>Upcoming conferences</h1>
      <div className="botton-container">
        <div className="bottom-subcontainer">
          <div className="bottom-left-subcontainer">
          <div className="date" >
              <span className="date-number">06</span>
              <h5 className="date-month">Feb</h5>
              <h5 className="date-year">2016</h5>
            </div>

            <div className="content">
              <h3>Global Trail Placement Strategies</h3>
              <h4>National 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
          </div>
          <button className="workshop-button">
            <span>learn more</span>
            <span>
              <ArrowRightAltIcon />
            </span>
          </button>
        </div>
        <div className="bottom-subcontainer">
          <div className="bottom-left-subcontainer">
            <div  className="date" style={{backgroundColor:"red"}}>
              <span className="date-number">06</span>
              <h5 className="date-month">Feb</h5>
              <h5 className="date-year">2016</h5>
            </div>

            <div className="content">
              <h3>Global Trail Placement Strategies</h3>
              <h4>National 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
          </div>
          <button className="workshop-button">
            <span>learn more</span>
            <span>
              <ArrowRightAltIcon />
            </span>
          </button>
        </div>
        <div className="bottom-subcontainer">
          <div className="bottom-left-subcontainer">
            <div className="date" style={{backgroundColor:"green"}}>
              <span className="date-number">06</span>
              <h5 className="date-month">Feb</h5>
              <h5 className="date-year">2016</h5>
            </div>

            <div className="content">
              <h3>Global Trail Placement Strategies</h3>
              <h4>National 2019</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>
          </div>
          <button className="workshop-button">
            <span>learn more</span>
            <span>
              <ArrowRightAltIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
