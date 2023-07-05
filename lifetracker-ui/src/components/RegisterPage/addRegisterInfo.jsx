import React, { useEffect } from "react";
import axios from "axios";

const addRegisterInfo = async (name, email) => {
  useEffect(() => {
    const addData = async () => {
      try {
        const res = await axios.post(`http://localhost:3001/auth/register`, {
          email: "Thisnoworks@gmail.com",
          firstName: "itworked",
          lastName: "itworked",
          username: "itworked",
          password: "secretpassword",
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    addData();
  }, []);

  return <></>;
};

export default addRegisterInfo;
