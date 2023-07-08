import React, { useState } from "react";
import axios from "axios";
import "./CreateSleep.css";

const CreateSleep = ({ id }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  console.log(startTime);
  const handleAddData = async (event, startTime, endTime, id) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "https://lifetracker-backend-4wt1.onrender.com/auth/sleep",
        {
          startTime: startTime,
          endTime: endTime,
          userId: id,
        }
      );
      console.log(res.data);
      window.location.href = "/sleep";
    } catch (err) {
      console.log(err);
    }
  };

  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTime = (event) => {
    // event.preventdefault();
    setEndTime(event.target.value);
  };

  return (
    <div class="sleepRecordContainer">
      <h2 class="sleepRecordTitle">Add Sleep Record</h2>
      <form
        class="sleepRecordForm"
        onSubmit={(event) => handleAddData(event, startTime, endTime, id)}
      >
        <div class="formGroup">
          <label class="formLabel">
            Start Time:
            <br />
            <input
              type="datetime-local"
              selected={startTime}
              onChange={(event) => handleStartTime(event)}
              // showTimeSelect
              // dateFormat="MM/dd/yyyy, h:mm aa"
            />
          </label>
        </div>
        <div class="formGroup">
          <label class="formLabel">
            End Time:
            <br />
            <input
              type="datetime-local"
              selected={endTime}
              onChange={(event) => handleEndTime(event)}
              // showTimeSelect
              // dateFormat="MM/dd/yyyy, h:mm aa"
            />
          </label>
        </div>
        <div class="formGroup">
          <button class="submitButton" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSleep;
