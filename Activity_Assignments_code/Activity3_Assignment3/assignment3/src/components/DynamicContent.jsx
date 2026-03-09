import React, { useState } from "react";

function ProductContent() {

  const [product] = useState({
    name: "Smartphone",
    brand: "Samsung",
    price: "₹25,000",
    category: "Electronics",
    features: ["6GB RAM", "128GB Storage", "5000mAh Battery", "AMOLED Display"]
  });

  const { name, brand, price, category, features } = product;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px" }}>
        
        <h2>Product Details</h2>

        <p><b>Product Name:</b> {name}</p>
        <p><b>Brand:</b> {brand}</p>
        <p><b>Price:</b> {price}</p>
        <p><b>Category:</b> {category}</p>

        <div>
          <b>Features:</b>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ProductContent;