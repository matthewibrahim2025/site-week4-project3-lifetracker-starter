import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NutritionDetails.css";

export const NutritionDetails = ({ id }) => {
  const [nutrition, setNutrition] = useState(null);

  let avgCals = 0;

  useEffect(() => {
    const fetchNutritionDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/auth/nutrition/${id}`
        );
        console.log(res.data.nutrition);
        setNutrition(res.data.nutrition);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNutritionDetails();
  }, [id]);

  nutrition &&
    nutrition.length > 0 &&
    nutrition.map((nutrition) => (avgCals = avgCals + nutrition.calories));

  if (avgCals > 0 && nutrition && nutrition.length > 0) {
    avgCals = avgCals / nutrition.length;
  }

  useEffect(() => {
    localStorage.setItem("avgCals", avgCals.toFixed(2));
  }, [avgCals]);

  // console.log((avgCals));

  return (
<div className="nutritionContainer">
  {nutrition && nutrition.length > 0 ? (
    <div className="nutritionList">
      {nutrition.map((nutrition) => (
        <div className="nutritionItem">
          <p className="itemLabel">Name: </p>
          <p className="itemValue">{nutrition.name}</p>
          <p className="itemLabel">Quantity: </p>
          <p className="itemValue">{nutrition.quantity} minutes</p>
          <p className="itemLabel">Calories: </p>
          <p className="itemValue">{nutrition.calories}</p>
          <p className="itemLabel">Image: </p>
          <img src={nutrition.imageurl} alt="Nutrition Image" className="itemImage" />
        </div>
      ))}
    </div>
      ) : (
        <p>No nutrition items found.</p>
      )}
    </div>
  );
};
