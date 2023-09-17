import "../styles/LoginStyle/Login.scss";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login_form">
        <h1>LOGIN</h1>

        <div className="login_form_details">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleClick} disabled={isFetching}>
            SUBMIT
          </button>

          {error && <div style={{ color: "red" }}>Something went wrong...</div>}

          <div>
            <div className="login_form_details_notice">
              <a>Forget your password?</a>
              <br />
              <a href="/register">Don't have an account? Sign In Here</a>
              <br />
            </div>
            <p>DEMO Account:</p>{" "}
            <p>Email - "phucmai@email.com" Pass - "phucmai"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
