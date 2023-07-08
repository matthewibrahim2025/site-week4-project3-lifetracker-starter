import React from "react";
import "./Home.css";
// import tracker from "../tracker.jpg";
import tracker from "../../assets/tracker.jpg";

const Home = () => {
  return (
    <div className="landingPage">
      <h1 className="landingTitle">LifeTracker</h1>
      <h2 className="landingSubtitle">
        Helping you take back control of your world.
      </h2>
      <img src={tracker} alt="Landing Page" className="landingPhoto" />
      <p className="landingBlurb">
        LifeTracker is a comprehensive application designed to empower you to
        lead a healthier lifestyle. With our intuitive and user-friendly
        interface, you can effortlessly track and manage essential aspects of
        your well-being, including sleep patterns, nutrition, and exercise
        routines. Gain valuable insights, set achievable goals, and make
        informed decisions to improve your overall health and quality of life.
        Take the first step towards a better you with LifeTracker.
      </p>
      <a href="/register" className="landingButton">
        Create your account now
      </a>
    </div>
  );
};

export default Home;
