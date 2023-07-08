import React from "react";
import { SleepDetails } from "./SleepDetails";
import './SleepPage.css'

export const SleepPage = ({ id, isLogged }) => {
  return (
    <div>
      {isLogged ? (
        <div class="exercisePage">
          <div class="exerciseHeader">
            <h2 class="exerciseHeading">Sleep</h2>
          </div>
          <div class="exerciseContent">
            <div class="exerciseAction">
              <a class="exerciseLink" href="/sleep/create">
                <button type="button" class="exerciseButton">
                  Add Sleep
                </button>
              </a>
            </div>
          </div>
          <SleepDetails id={id} />
        </div>
      ) : (
        <div>
          <p>Please login.</p>
        </div>
      )}
    </div>
  );
};
