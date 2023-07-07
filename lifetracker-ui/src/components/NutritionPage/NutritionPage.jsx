import React from 'react'
// import { ExerciseDetails } from "./ExerciseDetails";
import { NutritionDetails } from './NutritionDetails';

export const NutritionPage = ({id, isLogged}) => {
  return (
    <div>

    {isLogged ? (
      <div class="ExercisePage css-1bpnzr3">
        <div class="css-19cns6y">
          <div class="chakra-stack css-1cgbrw5">
            <h2 class="chakra-heading css-b5coes">Nutrition</h2>
          </div>
        </div>
        <div class="css-vpbd2d">
          <div class="css-1qfrez2">
            <div class="css-uiodal">
              <div class="exercise-feed">
                <div class="css-0">
                  <div class="css-j7qwjs">
                    {/* <h2 class="chakra-heading css-hzsul0">Nothing here yet.</h2> */}
                    <a class="chakra-link button css-spn4bz" href="/nutrition/create">
                      <button type="button" class="chakra-button css-ez23ye">
                        Record Nutrition
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
        <NutritionDetails id={id} />
      </div>
    ) : 
    (
      <div>
        <p>Please login.</p>
      </div>
    )}
    
    </div>
  )
}
