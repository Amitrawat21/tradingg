import React, { useState } from "react";
import "./Workshop.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import workshopData from "../../Data/data";

const Workshop = () => {
  const [data, setData] = useState(workshopData);

  // Helper function to format the date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp); // Convert timestamp to Date object
    const day = date.getDate().toString().padStart(2, "0"); // Get day and pad with 0
    const month = date.toLocaleString("default", { month: "short" }); // Get short month name
    const year = date.getFullYear(); // Get year
    return { day, month, year };
  };

  console.log(data, "dataaaaa");

  return (
    <div className="workshop">
      <h1>Upcoming conferences</h1>
      <div className="botton-container">
        {data.map((ele, index) => {
          const { day, month, year } = formatDate(ele.dateTs); // Format date
          return (
            <div key={index} className="bottom-subcontainer">
              <div className="bottom-left-subcontainer">
                <div className="date">
                  <span className="date-number">{day}</span>
                  <h5 className="date-month">{month}</h5>
                  <h5 className="date-year">{year}</h5>
                </div>

                <div className="content">
                  <h3>{ele.title}</h3>
                  <h4>{ele.subTitle}</h4>
                  <p>{ele.description}</p>
                </div>
              </div>
              <button className="workshop-button">
                <span>learn more</span>
                <span>
                  <ArrowRightAltIcon />
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workshop;
