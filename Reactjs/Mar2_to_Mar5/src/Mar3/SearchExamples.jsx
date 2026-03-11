import React, { useState } from "react";
import "./SearchExamples.css"

function SearchExamples() {

  // ===== Lesson 34 : Simple Search =====
  const [searchName, setSearchName] = useState("");

  const students = [
    "Kiran",
    "Aadya",
    "Anusha",
    "Vidya",
    "Amruta",
    "Rahul",
    "Sneha",
    "Arjun"
  ];

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchName.toLowerCase())
  );

  // ===== Lesson 35 : Advanced Search (Products) =====
  const [searchProduct, setSearchProduct] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: "₹75000" },
    { id: 2, name: "Smartphone", price: "₹30000" },
    { id: 3, name: "Headphones", price: "₹2500" },
    { id: 4, name: "Smart Watch", price: "₹6000" },
    { id: 5, name: "Keyboard", price: "₹1500" }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="search-container">

      {/* ===== Search Example 1 ===== */}
      <div className="search-card">
        <h2>Student Search</h2>

        <input
          type="text"
          placeholder="Search student name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="search-input"
        />

        <ul className="list-box">
          {filteredStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>

      {/* ===== Search Example 2 ===== */}
      <div className="search-card">
        <h2>Product Search</h2>

        <input
          type="text"
          placeholder="Search product..."
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="search-input"
        />

        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default SearchExamples;
