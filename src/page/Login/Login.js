import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [signIn, toggle] = useState(true);
  return (
    <div className="main-container">
           <div className="containerrr">
      <div className={`signup-container ${!signIn ? "active" : ""}`}>
        <form className="formmm">
          <h1  style = {{color:"blue"}}className="title">Create-account</h1>
          <input className="inputs" type="text" placeholder="Name" />
          <input className="inputs" type="email" placeholder="Email" />
          <input className="inputs" type="password" placeholder="Password" />
          <button className="login-button">Sign Up</button>
        </form>
      </div>

      <div className={`signin-container ${signIn ? "active" : ""}`}>
        <form className="formmm">
          <h1 style = {{color:"blue"}} className="title">Sign-in</h1>
          <input className="inputs" type="email" placeholder="Email" />
          <input className="inputs" type="password" placeholder="Password" />
          <a className="anchor" href="#">
            Forgot your password?
          </a>
          <button className="login-button">Sign In</button>
        </form>
      </div>

      <div className={`overlay-container ${!signIn ? "active" : ""}`}>
        <div className={`overlay  ${!signIn ? "active" : ""}`}>
          <div className="leftoverlay">
            <h1 className="title">Welcome Back</h1>
            <p className="paragraph">
              to keep conneted with us please login with yur personal info
            </p>
            <button className="toggle-button" onClick={() => toggle(true)}>
              Sign in
            </button>
          </div>
          <div className="rightoverlay">
            <h1 className="title">hello friends</h1>
            <p className='paragraph'>Enter your personal detail and start journey with us</p>
            <button className="toggle-button" onClick={() => toggle(false)}>
              Sign in up
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
 
  );
};

export default Login;
