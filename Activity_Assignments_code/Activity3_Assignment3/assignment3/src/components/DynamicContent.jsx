import React from "react";

function DynamicContent() {
  const user = {
    name: "Kirana G V",
    role: "Software Developer",
    location: "Bengaluru",
    skills: ["React", "JavaScript", "AI"],
    experience: "Full Stack Development"
  };

  const { name, role, location, skills, experience } = user;

  return (
    <div className="card">
      <h2 className="card-title">User Profile</h2>

      <div className="card-body">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Experience:</strong> {experience}</p>

        <div>
          <strong>Skills:</strong>
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