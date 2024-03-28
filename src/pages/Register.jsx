import React from "react";
import "../css/Register.css";

const Register = () => {
  return (
    <div className="container1">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Last Name" />
          <input className="input" placeholder="Username" />
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" />
          <input className="input" placeholder="Confirm Password" />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
