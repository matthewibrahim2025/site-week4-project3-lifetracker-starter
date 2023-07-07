import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateSleep = ({ id }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleAddData = async (event, startTime, endTime,id) => {
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
    <div>
      <h2>Add Sleep Record</h2>
      <form 
      onSubmit={(event) => handleAddData(event, startTime, endTime, id)}
      >
        <label>
          Start Time:
          <br />
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy, h:mm aa"
          />
        </label>
        <br />
        <label>
          End Time:
          <br />
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            dateFormat="MM/dd/yyyy, h:mm aa"
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateSleep;
