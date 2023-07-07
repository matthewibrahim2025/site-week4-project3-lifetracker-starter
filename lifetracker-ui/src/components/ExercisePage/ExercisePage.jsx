import React from "react";
import bikePath from "../../assets/bikepath-ebe31266.jpg";
import "./ExercisePage.css";
// import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ExerciseDetails } from "./ExerciseDetails";
import { useState, useEffect } from "react";

const ExercisePage = ({id, isLogged}) => {


  return (

    <div>


    {isLogged ? (
      <div class="ExercisePage css-1bpnzr3">
        <div class="css-19cns6y">
          <div class="chakra-stack css-1cgbrw5">
            <h2 class="chakra-heading css-b5coes">Exercise</h2>
          </div>
        </div>
        <div class="css-vpbd2d">
          <div class="css-1qfrez2">
            <div class="css-uiodal">
              <div class="exercise-feed">
                <div class="css-0">
                  <div class="css-j7qwjs">
                    {/* <h2 class="chakra-heading css-hzsul0">Nothing here yet.</h2> */}
                    <a class="chakra-link button css-spn4bz" href="/exercise/create">
                      <button type="button" class="chakra-button css-ez23ye">
                        Add Exercise
                      </button>
                    </a>
                    {/* <img 
                      src={bikePath}
                      className="chakra-image css-ni3ua3 smaller-img"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExerciseDetails id={id}   />
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
