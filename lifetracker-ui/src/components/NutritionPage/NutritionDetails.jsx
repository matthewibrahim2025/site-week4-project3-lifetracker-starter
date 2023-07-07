import React, { useState, useEffect } from "react";
import axios from "axios";
// import bikePath from "../../assets/bikepath-ebe31266.jpg";

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

  nutrition && nutrition.length > 0 && nutrition.map((nutrition) => (
    avgCals = avgCals + nutrition.calories
  ))

  if (avgCals > 0 && nutrition && nutrition.length > 0) {
    avgCals = avgCals/nutrition.length;
    
    
  } 
  
useEffect(() => {
  localStorage.setItem("avgCals", (avgCals.toFixed(2)));
}, [avgCals]);

  // console.log((avgCals));
  
  

  return (
    <div>
      {(nutrition && nutrition.length > 0) ? (
        <div>
          {nutrition.map((nutrition) => (
            <div>
              <p>Name: {nutrition.name}</p>
              <p>Category: {nutrition.category}</p>
              <p>Quantity: {nutrition.quantity} minutes</p>
              <p>Calories: {nutrition.calories}</p>
              <p>Image: {nutrition.imageurl}</p>
              <p>Created At: {nutrition.created_at}</p>
            </div>
          ))}
          ;
        </div>
      ) : (
        <div>
          <h2 class="chakra-heading css-hzsul0">Nothing here yet.</h2>
          {/* <img src={bikePath} className="chakra-image css-ni3ua3 smaller-img" /> */}

          {/* <p>Loading exercise details...</p> */}
        </div>
      )}
    </div>
  );
};
