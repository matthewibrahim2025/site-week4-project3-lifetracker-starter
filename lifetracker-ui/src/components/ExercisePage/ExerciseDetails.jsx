import React, { useState, useEffect } from "react";
import axios from "axios";
import bikePath from "../../assets/bikepath-ebe31266.jpg";
import "./ExerciseDetails.css";

export const ExerciseDetails = ({ id }) => {
  const [exercise, setExercise] = useState(null);
  // const [exerciseTotal, setExerciseTotal] = useState(0);

  let exerciseTotal = 0;

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const res = await axios.get(
          `https://lifetracker-backend-4wt1.onrender.com/auth/exercise/${id}`
        );
        console.log(res.data.exercise);
        setExercise(res.data.exercise);
      } catch (err) {
        console.error(err);
      }
    };

    fetchExerciseDetails();
  }, [id]);

  exercise &&
    exercise.length > 0 &&
    exercise.map(
      (exercise) => (exerciseTotal = exerciseTotal + exercise.duration)
    );

  console.log(exerciseTotal);

  localStorage.setItem("exerciseTotal", exerciseTotal);

  return (
    <div>
      {exercise && exercise.length > 0 ? (
        <div className="exerciseContainer">
          {exercise.map((exercise) => (
            <div className="exerciseItem" key={exercise.id}>
              <p className="exerciseProperty">Name: {exercise.name}</p>
              {/* <p className="exerciseProperty">Category: {exercise.category}</p> */}
              <p className="exerciseProperty">
                Duration: {exercise.duration} minutes
              </p>
              <p className="exerciseProperty">
                Intensity: {exercise.intensity}/10
              </p>
              <p className="exerciseProperty">
                {/* Created At: {exercise.created_at} */}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 class="chakra-heading css-hzsul0">Nothing here yet.</h2>
          <img src={bikePath} className="chakra-image css-ni3ua3 smaller-img" />

          {/* <p>Loading exercise details...</p> */}
        </div>
      )}
    </div>
  );
};
