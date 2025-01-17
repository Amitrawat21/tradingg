import React from "react";
import "./Footer.css"
import backgroundImg from "../../Assest/horizontal.png";
const Footer = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="row">
        <div className="footer-col">
          <h4>Finegap</h4>
          <ul>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Programming</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Technology</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Properties</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Our History</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">API Integration</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Development</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <form action="#">
            <input type="text" placeholder="Your Name" className="inputName" />
            <input type="email" placeholder="Enter Company Email" className="inputEmail" />
            <input type="submit" value="Submit" className="inputSubmit" />
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <p>&#169; 2022 Finegap. All Rights Reserved.</p>
        </div>
        <div className="socialIcons">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
