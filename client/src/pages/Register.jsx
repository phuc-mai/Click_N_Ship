import { useState } from "react";
import "../styles/RegisterStyle/Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register_form">
        <h1>REGISTER</h1>

        <div className="register_form_details">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Address" />
        </div>

        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />

        <button>SUBMIT</button>

        {/* {login ? (
          <>
            <p>Forget your password?</p>
            <p>Don't have an account? Sign In Here</p>
          </>
        ) : ( */}
        <p>Already have an account? Log In Here</p>
      </div>
    </div>
  );
};

export default Register;
