import React, { useEffect } from "react";
import "./SignInPage.css";
import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";

const handleLogin = async (event, email, password, id, setId, setIsLogged) => {
  try {
    event.preventDefault();

    const res = await axios.post(`http://localhost:3001/auth/login`, {
      email: email,
      password: password,
    });

    

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

export default function SignInPage({id, setId, setIsLogged}) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <div className="signIn-container">
      <h2 class="chakra-heading css-3q8efk">Create an Account</h2>

      <div class="signIn-sect">
        <form onSubmit={(event) => handleLogin(event, email, password, id, setId, setIsLogged)}>
          {/* <div class="signIn-contents"> */}

          <input
            type="text"
            //   value={email}
            placeholder="Email"
            //   name="email"
            required
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            //   value={password}
            placeholder="Password"
            //   name="password"
            required
            onChange={(event) => {
              event.preventDefault();
              setPassword(event.target.value);
            }}
          />
          {/* </div> */}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
