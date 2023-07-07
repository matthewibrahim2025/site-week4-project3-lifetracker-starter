import React from "react";
// import "./CreateExercise.css";
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const CreateNut = ({id}) => {
  console.log(id, "create exer page");
  const handleAddData = async (event, name, category, quantity, calories, id, imageurl) => {
    
    try {
      console.log("THIS ID IS: " + id);
      // // const navigate = useNavigate();
      // event.preventDefault();
      // const res = await axios.post(`http://localhost:3001/auth/exercise`, {
      //   name: name,
      //   category: category,
      //   duration: duration,
      //   intensity: intensity,
      // });
      // console.log(res.data);
      // // Handle form submission, e.g., send data to server or update state
      // // You can access the selected values as name, category, duration, and intensity
      // // Reset the form values
      // setName("");
      // setCategory("run");
      // setDuration(0);
      // setIntensity(0);
      event.preventDefault();



      const res = await axios.post(`http://localhost:3001/auth/nutrition`, {
        name: name,
        category: category,
        quantity: quantity,
        calories: calories,
        userId: id,
        imageurl: imageurl
      });
      
      console.log(res.data);
      // setName("");
      // setCategory("run");
      // setDuration(0);
      // setIntensity(0);
      window.location.href = "/nutrition";
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [category, setCategory] = useState("food");
  const [quantity, setQuantity] = useState(0);
  const [calories, setCalories] = useState(0);
  const [imageurl, setImageurl] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCaloriesIncrement = () => {
    setCalories(calories + 1);
  };

  const handleCaloriesDecrement = () => {
    if (calories > 0) {
      setCalories(calories - 1);
    }
  };

  const handleImageurlChange = (event) => {
    setImageurl(event.target.value);
  };

  return (
    <div>
    <h2>Add Nutritional Data</h2>
    <form 
    
    onSubmit={(event) => handleAddData(event, name, category, quantity, calories, id, imageurl)}
    
    >
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="food">Food</option>
          <option value="beverage">Beverage</option>
          <option value="snack">Snack</option>
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <button type="button" onClick={handleQuantityDecrement}>-</button>
        <input
          type="number"
          min="0"
          max="60"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        <button type="button" onClick={handleQuantityIncrement}>+</button>
      </label>
      <br />
      <label>
        Calories (0-10):
        <button type="button" onClick={handleCaloriesDecrement}>-</button>
        <input
          type="number"
          min="0"
          max="10"
          value={calories}
          onChange={(event) => setCalories(parseInt(event.target.value))}
        />
        <button type="button" onClick={handleCaloriesIncrement}>+</button>
      </label>
      <br />
      <label>
        Image URL:
        <input type="text" value={imageurl} onChange={handleImageurlChange} />
      </label>
      <br />

      <button type="submit">Save</button>
    </form>
  </div>
);
};

export default CreateNut;
