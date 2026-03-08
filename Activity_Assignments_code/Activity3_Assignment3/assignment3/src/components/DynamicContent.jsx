import React from "react";

function DynamicContent() {

  const user = {
    name: "Kirana G V",
    role: "Software Developer",
    location: "Bengaluru",
    skills: ["React", "JavaScript", "AI"],
    experience: "Full Stack Development",
    avatar: "https://i.pravatar.cc/150"
  };

  const { name, role, location, skills, experience, avatar } = user;

  const handleClick = () => {
    alert(`Welcome to ${name}'s profile!`);
  };

  return (
    <div className="card">

      {/* Profile Image */}
      <div className="profile-header">
        <img src={avatar} alt="profile" className="avatar" />
        <h2 className="card-title">{name}</h2>
        <p className="role">{role}</p>
      </div>

      {/* Profile Details */}
      <div className="card-body">
        <p><strong>📍 Location:</strong> {location}</p>
        <p><strong>💼 Experience:</strong> {experience}</p>

        {/* Skills Section */}
        <div className="skills-section">
          <strong>🚀 Skills:</strong>
          <div className="skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="profile-btn" onClick={handleClick}>
          View Profile
        </button>
      </div>

    </div>
  );
}

export default DynamicContent;