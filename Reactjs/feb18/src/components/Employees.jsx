import { useState } from "react";
import "./Employees.css";

function Employees() {
  // ===== TABLE DATA =====
  const [employees, setEmployees] = useState([
    { name: "Kiran", role: "Team Lead (CEO)" },
    { name: "Aadya", role: "Employee" },
    { name: "Anusha", role: "Employee" },
    { name: "Vidya", role: "Employee" },
    { name: "Amruta", role: "Employee" }
  ]);

  const promoteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].role = "Senior Employee";
    setEmployees(updatedEmployees);
  };

  // ===== STAFF CARD DATA =====
  const [expandedId, setExpandedId] = useState(null);

  const [staff] = useState([
    {
      id: 1,
      name: "Kiran",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      designation: "SDE 3",
      exp: "20 years of experience in Java Full Stack",
      desc: "Kiran from Bangalore. He joined the company in 2022. He is the most senior and highly experienced leader in the organization."
    },
    {
      id: 2,
      name: "Aadya",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      designation: "SDE 2",
      exp: "6 years of experience in Frontend Development",
      desc: "Aadya from Hyderabad. She joined the company in 2023 and works on modern UI systems."
    },
    {
      id: 3,
      name: "Anusha",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      designation: "SDE 1",
      exp: "3 years of experience in React development",
      desc: "Anusha from Chennai. She joined in 2024 and contributes to web applications."
    },
    {
      id: 4,
      name: "Vidya",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
      designation: "Junior Developer",
      exp: "2 years of experience in testing and support",
      desc: "Vidya from Mysore. She supports QA and automation tasks."
    },
    {
      id: 5,
      name: "Amruta",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      designation: "Intern",
      exp: "Fresher in software development",
      desc: "Amruta from Pune. She recently joined as an intern and is learning full stack."
    }
  ]);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="employee-container">
      <h2 className="title">Organization Employees</h2>

      {/* ===== TABLE ===== */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{emp.name}</td>
              <td>
                <span className="role-badge">{emp.role}</span>
              </td>
              <td>
                <button
                  className="promote-btn"
                  onClick={() => promoteEmployee(index)}
                >
                  Promote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===== STAFF CARDS ===== */}
      <h2 className="card-title">Employee Details</h2>

      <div className="card-grid">
        {staff.map((person) => (
          <div className="employee-card" key={person.id}>
            <img src={person.image} alt={person.name} />

            <h3>{person.name}</h3>
            <p className="designation">{person.designation}</p>

            {person.id === 1 && (
              <span className="top-badge">⭐ Top Senior Employee</span>
            )}

            <button
              className="readmore-btn"
              onClick={() => toggleReadMore(person.id)}
            >
              {expandedId === person.id ? "Read Less" : "Read More"}
            </button>

            {expandedId === person.id && (
              <div className="extra-info">
                <p><strong>Experience:</strong> {person.exp}</p>
                <p>{person.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employees;