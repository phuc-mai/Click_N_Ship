import "../styles/LoginStyle/Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login_form">
        <h1>LOGIN</h1>

        <div className="login_form_details">
          <input placeholder="Email" />
          <input placeholder="Password" />

          <button>SUBMIT</button>

          <div>
            <a>Forget your password?</a>
            <br />
            <a href="/register">Don't have an account? Sign In Here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
