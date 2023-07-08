import React from "react";
// import { ExerciseDetails } from "./ExerciseDetails";
import { NutritionDetails } from "./NutritionDetails";
import './NutritionPage.css';

export const NutritionPage = ({ id, isLogged }) => {
  return (
    <div>
      {isLogged ? (
        <div class="ExercisePage css-1bpnzr3">
          <div class="nutrition-container">
            <h2 class="nutrition-heading">Nutrition</h2>

            <div class="nutrition-section">
              <a class="nutrition-link" href="/nutrition/create">
                <button type="button" class="nutrition-button">
                  Record Nutrition
                </button>
              </a>
            </div>
          </div>

          <NutritionDetails id={id} />
        </div>
      ) : (
        <div>
          <p>Please login.</p>
        </div>
      )}
    </div>
  );
};
