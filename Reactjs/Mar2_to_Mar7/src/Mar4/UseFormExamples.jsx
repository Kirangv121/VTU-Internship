import React, { useState } from "react";

function UseFormExamples() {

  // ===== Lesson 36 : Basic Form =====
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setMessage("Hello " + name + ", your form was submitted!");
  };

  // ===== Lesson 37 : Multiple Input Form =====
  const [formData, setFormData] = useState({
    email: "",
    course: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    alert(
      `Email: ${formData.email} | Course: ${formData.course} | City: ${formData.city}`
    );
  };

  // ===== Lesson 38 : Form Validation =====
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleValidationChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (user.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">

      {/* Lesson 36 */}
      <div className="form-card">
        <h2>Lesson 36 - Basic Form</h2>

        <form onSubmit={handleSubmit1}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />

          <button className="form-btn">Submit</button>
        </form>

        <p className="form-message">{message}</p>
      </div>


      {/* Lesson 37 */}
      <div className="form-card">
        <h2>Lesson 37 - Multiple Input Form</h2>

        <form onSubmit={handleSubmit2}>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="text"
            name="course"
            placeholder="Enter course"
            value={formData.course}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />

          <button className="form-btn">Register</button>

        </form>
      </div>


      {/* Lesson 38 */}
      <div className="form-card">
        <h2>Lesson 38 - Form Validation</h2>

        <form onSubmit={handleSubmit3}>

          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={user.username}
            onChange={handleValidationChange}
            className="form-input"
          />

          {errors.username && (
            <p className="error-text">{errors.username}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleValidationChange}
            className="form-input"
          />

          {errors.password && (
            <p className="error-text">{errors.password}</p>
          )}

          <button className="form-btn">Login</button>

        </form>
      </div>

    </div>
  );
}

export default UseFormExamples;
