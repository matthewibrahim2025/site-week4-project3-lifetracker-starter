import React from "react";
import bikePath from "../../assets/bikepath-ebe31266.jpg";
import "./ExercisePage.css";
// import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ExerciseDetails } from "./ExerciseDetails";
import { useState, useEffect } from "react";

const ExercisePage = ({ id, isLogged }) => {
  return (
    <div>
      {isLogged ? (
        <div class="ExercisePage css-1bpnzr3">
          <div class="exercise-container">
            <div class="exercise-heading">
              <h2>Exercise</h2>
            </div>

            <div class="exercise-feed">
              <div class="exercise-button-container">
                <a class="exercise-button" href="/exercise/create">
                  Add Exercise
                </a>
              </div>
            </div>
          </div>

          <ExerciseDetails id={id} />
        </div>
      ) : (
        <div>
          <p>Please login.</p>
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
