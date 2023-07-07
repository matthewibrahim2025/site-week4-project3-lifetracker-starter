import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar"




const ActivityPage = ({isLogged}) => {
  const exerciseTotal = localStorage.getItem("exerciseTotal");
  const avgCals = localStorage.getItem("avgCals");
  const avgHrs = localStorage.getItem("avgHrs");
  // console.log(id);
  return (
    <div>
      {isLogged ? (

        
        <div class="ActivityPage">

          
          Total Excercise Minutes
          <h1>{exerciseTotal}</h1>

          Average Calories Consumed
          <h1>{avgCals}</h1>
     
          Average Hours Slept
          <h1>{avgHrs}</h1>

        



        </div>



      ) : (
        <div>
          <p>Please login.</p>
        </div>
      )}
    </div>
  );
};

export default ActivityPage;
