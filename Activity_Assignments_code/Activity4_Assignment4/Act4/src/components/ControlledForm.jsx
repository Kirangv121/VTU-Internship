import { useState } from "react";

function ControlledForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="form-container">

      <h2>React Controlled Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Enter message"
        value={formData.message}
        onChange={handleChange}
      />

      <h3>Live Preview</h3>

      <p><b>Name:</b> {formData.name}</p>
      <p><b>Email:</b> {formData.email}</p>
      <p><b>Message:</b> {formData.message}</p>
	  

    </div>
  );
}

export default ControlledForm;