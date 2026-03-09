import { useState } from "react";

function DynamicContent() {

  const [user] = useState({
    name: "Kirana G V",
    role: "Software Developer",
    location: "Bengaluru",
    skills: "React, JavaScript, AI",
    experience: "Full Stack Development"
  });

  return (
    <div className="card">
      <h2>User Profile</h2>

      <p><b>Name: </b> {user.name}</p>
      <p><b>Role: </b> {user.role}</p>
      <p><b>Location: </b> {user.location}</p>
      <p><b>Skills: </b> {user.skills}</p>
      <p><b>Experience: </b> {user.experience}</p>

    </div>
  );
}

export default DynamicContent;