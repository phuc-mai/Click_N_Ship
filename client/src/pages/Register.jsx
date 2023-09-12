import { Link } from "react-router-dom";

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

        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default Register;
