import "./App.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegisterPage from "../RegisterPage/RegisterPage";
import SignInPage from "../SignInPage/SignInPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import ExercisePage from "../ExercisePage/ExercisePage";
import CreateExercise from "../CreateExercise/CreateExercise";
import { useState } from "react";
// import { use } from '../../../../lifetracker-api/routes/auth'
import { useEffect } from "react";
import CreateNut from "../CreateNut/CreateNut";
import { NutritionPage } from "../NutritionPage/NutritionPage";
import { SleepPage } from "../SleepPage/SleepPage";
import CreateSleep from "../CreateSleep/CreateSleep";
import React from "react";

function App() {
  // const [exercise, setExercise] = useState(null);
  const [id, setId] = useState(null);
  // console.log(id);

  const [isLogged, setIsLogged] = useState(false);


  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setId(id);
      setIsLogged(true);
    } else {
      setIsLogged(false);
      localStorage.setItem("exerciseTotal", 0);
      localStorage.setItem("avgCals", 0);
      localStorage.setItem("avgHrs", 0);

    }
  }, [isLogged]);

  return (
    <div>
      <BrowserRouter>
        <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/login"
            element={
              <SignInPage id={id} setId={setId} setIsLogged={setIsLogged} />
            }
          />

          <Route
            path="/activity/*"
            element={<ActivityPage isLogged={isLogged} />}
          />

          <Route
            path="/exercise"
            element={<ExercisePage id={id} isLogged={isLogged} />}
          />

          <Route path="/exercise/create" element={<CreateExercise id={id} />} />

          <Route
            path="/nutrition"
            element={<NutritionPage id={id} isLogged={isLogged} />}
          />

          <Route path="/nutrition/create" element={<CreateNut id={id} />} />

          <Route
            path="/sleep"
            element={<SleepPage id={id} isLogged={isLogged} />}
          />

          <Route path="/sleep/create" element={<CreateSleep id={id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
