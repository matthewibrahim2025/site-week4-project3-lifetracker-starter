import React, { useState, useEffect } from "react";
import axios from "axios";
// import bikePath from "../../assets/bikepath-ebe31266.jpg";

export const SleepDetails = ({ id }) => {
  const [sleep, setSleep] = useState(null);

  let avgHrs = 0;


  useEffect(() => {
    const fetchSleepDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/auth/sleep/${id}`
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
    const durations = sleep.map(sleep => {
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
  
    localStorage.setItem("avgHrs", (avgHrs.toFixed(2)));
    // console.log(`Average hours slept: ${averageHoursSlept}`);
  }
  


  return (
    <div>
      {(sleep && sleep.length > 0) ? (
        <div>
          {sleep.map((sleep) => (
            <div>
              <p>Start Time: {sleep.start_time}</p>
              <p>End Time: {sleep.end_time}</p>

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
