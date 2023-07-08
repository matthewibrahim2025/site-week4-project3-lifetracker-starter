import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./CreateSleep.css";

const CreateSleep = ({ id }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleAddData = async (event, startTime, endTime, id) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/auth/sleep", {
        startTime: startTime,
        endTime: endTime,
        userId: id,
      });
      console.log(res.data);
      window.location.href = "/sleep";
    } catch (err) {
      console.log(err);
    }
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
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy, h:mm aa"
            />
          </label>
        </div>
        <div class="formGroup">
          <label class="formLabel">
            End Time:
            <br />
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy, h:mm aa"
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
