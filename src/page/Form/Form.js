
import React from "react";
import Contact from "../../component/Contact/Contact";
import backgroundImg from "../../Assest/horizontal.png";
import "./Form.css"

const Form = () => {
  return (
    <div
      className="formm"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <p>
        Sure! Here's a 50-word Lorem Ipsum paragraph: Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate.
      </p>

      <Contact />
    </div>
  );
};

export default Form;
