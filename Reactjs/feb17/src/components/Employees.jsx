import { useState } from "react";
import "./Employees.css";

function Employees() {
  const [employees, setEmployees] = useState([
    { name: "Kiran", role: "Team Lead" },
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

  return (
    <div className="employee-container">
      <h2 className="title">Organization Employees</h2>

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
    </div>
  );
}

export default Employees;