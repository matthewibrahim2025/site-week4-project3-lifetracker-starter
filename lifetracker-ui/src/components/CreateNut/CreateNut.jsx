import React from "react";
// import "./CreateExercise.css";
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import "./CreateNut.css";

const CreateNut = ({id}) => {
  console.log(id, "create exer page");
  const handleAddData = async (event, name, category, quantity, calories, id, imageurl) => {
    
    try {
      console.log("THIS ID IS: " + id);

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
<div class="addNutritionalData">
  <h2>Add Nutritional Data</h2>
  <form
    class="formContainer"
    onSubmit={(event) => handleAddData(event, name, category, quantity, calories, id, imageurl)}
  >
    <div class="inputGroup">
      <label for="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
    </div>
    <div class="inputGroup">
      <label for="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="food">Food</option>
        <option value="beverage">Beverage</option>
        <option value="snack">Snack</option>
      </select>
    </div>
    <div class="inputGroup">
      <label for="quantity">Quantity:</label>
      <div class="quantityControls">
        <button type="button" onClick={handleQuantityDecrement}>-</button>
        <input
          type="number"
          id="quantity"
          min="0"
          max="60"
          value={quantity}
          onChange={(event) => setQuantity(parseInt(event.target.value))}
        />
        <button type="button" onClick={handleQuantityIncrement}>+</button>
      </div>
    </div>
    <div class="inputGroup">
      <label for="calories">Calories (0-10):</label>
      <div class="caloriesControls">
        <button type="button" onClick={handleCaloriesDecrement}>-</button>
        <input
          type="number"
          id="calories"
          min="0"
          max="10"
          value={calories}
          onChange={(event) => setCalories(parseInt(event.target.value))}
        />
        <button type="button" onClick={handleCaloriesIncrement}>+</button>
      </div>
    </div>
    <div class="inputGroup">
      <label for="imageurl">Image URL:</label>
      <input type="text" id="imageurl" value={imageurl} onChange={handleImageurlChange} />
    </div>
    <button type="submit" class="submitButton">Save</button>
  </form>
</div>

);
};

export default CreateNut;
