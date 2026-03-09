import React, { useState } from "react";

function DynamicContent() {

  const [user] = useState({
    name: "Kirana G V",
    role: "Software Developer",
    location: "Bengaluru",
    skills: ["React", "JavaScript", "AI"],
    experience: "Full Stack Development"
  });

  const { name, role, location, skills, experience } = user;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <div className="card" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "300px" }}>
        
        <h2>User Profile</h2>

        <p><b>Name:</b> {name}</p>
        <p><b>Role:</b> {role}</p>
        <p><b>Location:</b> {location}</p>
        <p><b>Experience:</b> {experience}</p>

        <div>
          <b>Skills:</b>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default DynamicContent;