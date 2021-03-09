import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    //prevents refreshing of the page
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to={"/"}>
        <img
          className="login__logo"
          src={"http://pngimg.com/uploads/mars_planet/mars_planet_PNG11.png"}
          alt="Marsplanet"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__title">Sign-in</h1>
        <form className="login__form">
          <h5>E-mail</h5>
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            id="submit"
            type="submit"
            onClick={signIn}
          >
            Sign-in
          </button>
        </form>
        <p>
          <small className="login__terms">
            <input type="checkbox" /> I agree to the{" "}
            <strong>terms of service</strong>
          </small>
        </p>
        <button
          className="login__signUpButton"
          id="submit"
          type="submit"
          onClick={register}
        >
          Sign-up >
        </button>
      </div>
    </div>
  );
}

export default Login;
