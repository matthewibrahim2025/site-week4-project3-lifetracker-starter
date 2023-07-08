import React, { useState, useEffect } from "react";
import axios from "axios";
// import bikePath from "../../assets/bikepath-ebe31266.jpg";
import "./SleepDetails.css";

export const SleepDetails = ({ id }) => {
  const [sleep, setSleep] = useState(null);

  let avgHrs = 0;

  useEffect(() => {
    const fetchSleepDetails = async () => {
      try {
        const res = await axios.get(
          `https://lifetracker-backend-4wt1.onrender.com/auth/sleep/${id}`
        );
        console.log(res.data.sleep);
        setSleep(res.data.sleep);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSleepDetails();
  }, [id]);

  let totalHours = 0;
  // avgHrs = 0;
  if (sleep && sleep.length > 0) {
    const durations = sleep.map((sleep) => {
      const start = new Date(sleep.start_time).getTime();
      const end = new Date(sleep.end_time).getTime();
      const duration = (end - start) / (1000 * 60 * 60); // Convert milliseconds to hours
      totalHours = totalHours + duration;
      // avgHrs = totalHours / sleep.length;
    });

    // console.log(totalHours);

    // const averageDuration = durations.reduce((sum, duration) => sum + duration, 0) / durations.length;

    // Round the average to two decimal places
    const avgHrs = totalHours / sleep.length;

    // console.log(avgHrs);

    localStorage.setItem("avgHrs", avgHrs.toFixed(2));
    // console.log(`Average hours slept: ${averageHoursSlept}`);
  }
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function formatTime(dateString) {
    const date = new Date(dateString);
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  }

  // Rest of your component code...

  return (
    <div class="sleepRecordsContainer">
      {sleep && sleep.length > 0 ? (
        <div class="sleepRecordsBox">
          {sleep.map((sleep, index) => (
            <div class="sleepRecord" key={index}>
              <p class="recordDate">{formatDate(sleep.start_time)}</p>
              <div class="recordDetails">
                <p>
                  Start Time:{" "}
                  <span class="recordTime">{formatTime(sleep.start_time)}</span>
                </p>
                <p>
                  End Time:{" "}
                  <span class="recordTime">{formatTime(sleep.end_time)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No sleep records found.</p>
      )}
    </div>
  );
};
