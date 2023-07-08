import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar"
import "./ActivityPage.css";

const ActivityPage = ({ isLogged }) => {
  const exerciseTotal = localStorage.getItem("exerciseTotal");
  const avgCals = localStorage.getItem("avgCals");
  const avgHrs = localStorage.getItem("avgHrs");
  // console.log(id);
  return (
    <div className="activityPage">
      {isLogged ? (
        <div className="activitySummary">
          <h1 className="activityTitle">Activity Feed</h1>

          <div className="activityMetricBox exerciseMetric">
            <h2 className="activityMetricTitle">Total Exercise Minutes</h2>
            <p className="metricValue">{exerciseTotal}</p>
          </div>

          <div className="activityMetricBox calorieMetric">
            <h2 className="activityMetricTitle">Average Calories Consumed</h2>
            <p className="metricValue">{avgCals}</p>
          </div>

          <div className="activityMetricBox sleepMetric">
            <h2 className="activityMetricTitle">Average Hours Slept</h2>
            <p className="metricValue">{avgHrs}</p>
          </div>
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
