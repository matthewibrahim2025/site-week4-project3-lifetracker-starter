import React, { useEffect } from "react";
import "./SignInPage.css";
import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";

const handleLogin = async (event, email, password, id, setId, setIsLogged) => {
  try {
    event.preventDefault();

    const res = await axios.post(
      `https://lifetracker-backend-4wt1.onrender.com/auth/login`,
      {
        email: email,
        password: password,
      }
    );

    // setId(res.data.user.id);
    // console.log(res.data.user.id);

    setIsLogged(true);
    localStorage.setItem("id", res.data.user.id);

    // console.log(res.data.user.id);
    // console.log(id);

    window.location.href = "/activity";
  } catch (err) {
    console.log(err);
  }
};

export default function SignInPage({ id, setId, setIsLogged }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="signIn-container">
      <h2 className="signIn-heading">Sign In</h2>

      <div className="signIn-section">
        <form
          className="signIn-form"
          onSubmit={(event) =>
            handleLogin(event, email, password, id, setId, setIsLogged)
          }
        >
          <input
            type="text"
            className="signIn-input"
            placeholder="Email"
            required
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            className="signIn-input"
            placeholder="Password"
            required
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);
            }}
          />

          <button type="submit" className="signIn-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
