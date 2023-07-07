import React from "react";
import "./CreateExercise.css";
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const CreateExercise = ({id}) => {
  console.log(id, "create exer page");
  const handleAddData = async (event, name, category, duration, intensity, id) => {
    
    try {
      console.log("THIS ID IS: " + id);
      // // const navigate = useNavigate();
      // event.preventDefault();
      // const res = await axios.post(`http://localhost:3001/auth/exercise`, {
      //   name: name,
      //   category: category,
      //   duration: duration,
      //   intensity: intensity,
      // });
      // console.log(res.data);
      // // Handle form submission, e.g., send data to server or update state
      // // You can access the selected values as name, category, duration, and intensity
      // // Reset the form values
      // setName("");
      // setCategory("run");
      // setDuration(0);
      // setIntensity(0);
      event.preventDefault();



      const res = await axios.post(`http://localhost:3001/auth/exercise`, {
        name: name,
        category: category,
        duration: duration,
        intensity: intensity,
        userId: id,
      });

      
      console.log(res.data);
      // setName("");
      // setCategory("run");
      // setDuration(0);
      // setIntensity(0);
      window.location.href = "/exercise";
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [category, setCategory] = useState("run");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleIntensityChange = (event) => {
    setIntensity(event.target.value);
  };

  const handleDurationIncrement = () => {
    if (duration < 60) {
      setDuration(duration + 1);
    }
  };

  const handleDurationDecrement = () => {
    if (duration > 0) {
      setDuration(duration - 1);
    }
  };

  const handleIntensityIncrement = () => {
    if (intensity < 10) {
      setIntensity(intensity + 1);
    }
  };

  const handleIntensityDecrement = () => {
    if (intensity > 0) {
      setIntensity(intensity - 1);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission, e.g., send data to server or update state
  //   // You can access the selected values as name, category, duration, and intensity
  //   // Reset the form values
  //   setName("");
  //   setCategory("run");
  //   setDuration(0);
  //   setIntensity(0);
  // };

  return (
    <div>
      <h2>Add Exercise</h2>
      <form
        onSubmit={(event) => handleAddData(event, name, category, duration, intensity, id)}
      >
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value="run">Run</option>
            <option value="bike">Bike</option>
            <option value="lift">Lift</option>
            <option value="swim">Swim</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <br />
        <label>
          Duration (minutes):
          <button type="button" onClick={handleDurationDecrement}>
            -
          </button>
          <input
            type="number"
            min="0"
            max="60"
            value={duration}
            onChange={handleDurationChange}
          />
          <button type="button" onClick={handleDurationIncrement}>
            +
          </button>
        </label>
        <br />
        <label>
          Intensity (0-10):
          <button type="button" onClick={handleIntensityDecrement}>
            -
          </button>
          <input
            type="number"
            min="0"
            max="10"
            value={intensity}
            onChange={handleIntensityChange}
          />
          <button type="button" onClick={handleIntensityIncrement}>
            +
          </button>
        </label>
        <br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateExercise;
