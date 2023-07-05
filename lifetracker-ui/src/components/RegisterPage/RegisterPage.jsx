import React from "react";
import "./RegisterPage.css";
import { useState } from "react";
import axios from "axios";
// import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


// import addRegisterInfo from "./addRegisterInfo";

// const addData = async () => {
//     try {
//       const res = await axios.post(`http://localhost:3001/auth/register`, {
//         email: "Thisnoworks@gmail.com",
//         firstName: "itworked",
//         lastName: "itworked",
//         username: "itworked",
//         password: "secretpassword",
//       });
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

const handleAddData = async (
  event,
  email,
  username,
  first_name,
  last_name,
  password
) => {
  try {
    // const navigate = useNavigate();
    event.preventDefault();
    const res = await axios.post(`http://localhost:3001/auth/register`, {
      email: email,
      firstName: first_name,
      lastName: last_name,
      username: username,
      password: password,
    });
    console.log(res.data);
    // navigate('/activity');
  } catch (err) {
    console.log(err);
  }
};

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h2 class="chakra-heading css-3q8efk">Create an Account</h2>

      <div class="login-sect">
      <form onSubmit={(event) => handleAddData(event, email, username, first_name, last_name, password)}>
          <div class="login-contents">
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
              type="text"
              //   value={username}
              placeholder="Username"
              //   name="username"
              required
              onChange={(event) => {
                event.preventDefault();
                setUserName(event.target.value);
              }}
            />
            <input
              type="text"
              //   value={first_name}
              placeholder="First Name"
              //   name="first_name"
              required
              onChange={(event) => {
                event.preventDefault();
                setFirstName(event.target.value);
              }}
            />
            <input
              type="text"
              //   value={last_name}
              placeholder="Last Name"
              //   name="last_name"
              required
              onChange={(event) => {
                event.preventDefault();
                setLastName(event.target.value);
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
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              required
            />
            <button type="submit" href="/activity">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
