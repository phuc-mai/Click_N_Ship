import { useState } from "react";
import "../styles/LoginRegisterStyle/LoginRegister.scss";

const LoginRegister = () => {
  const [pageType, setPageType] = useState("register");
  const login = pageType === "login";
  const register = pageType === "register";

  return (
    <div className="login-register">
      <div className="login-register_form">
        <h1>{login ? "LOG IN" : "REGISTER"}</h1>

        {register && (
          <div className="login-register_form_details">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Address" />
          </div>
        )}

        <input placeholder="Email" />
        <input placeholder="Password" />
        {register && <input placeholder="Confirm Password" />}

        <button>SUBMIT</button>

        {login ? (
          <>
            <p>Forget your password?</p>
            <p>Don't have an account? Sign In Here</p>
          </>
        ) : (
          <p>Already have an account? Log In Here</p>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
