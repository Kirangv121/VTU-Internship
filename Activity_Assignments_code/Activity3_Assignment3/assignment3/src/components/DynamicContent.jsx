import React, { useState } from "react";

function FoodContent() {

  const [food] = useState({
    name: "Masala Dosa",
    type: "South Indian",
    price: "₹80",
    restaurant: "Udupi Restaurant",
    ingredients: ["Rice Batter", "Potato Filling", "Spices", "Ghee"]
  });

  const { name, type, price, restaurant, ingredients } = food;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px" }}>

        <h2>Food Details</h2>

        <p><b>Food Name:</b> {name}</p>
        <p><b>Type:</b> {type}</p>
        <p><b>Price:</b> {price}</p>
        <p><b>Restaurant:</b> {restaurant}</p>

        <div>
          <b>Ingredients:</b>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default FoodContent;