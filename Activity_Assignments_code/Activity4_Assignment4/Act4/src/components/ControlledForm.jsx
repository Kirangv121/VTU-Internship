import { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="form-card">

      <h2 className="form-title">React Controlled Form</h2>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="form-group">
        <label>Course</label>
        <input
          type="text"
          placeholder="Enter your course"
          value={course}
          onChange={handleCourseChange}
        />
      </div>

      <div className="preview">
        <h3>Live Preview</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Course:</b> {course}</p>
      </div>

    </div>
  );
}

export default ControlledForm;