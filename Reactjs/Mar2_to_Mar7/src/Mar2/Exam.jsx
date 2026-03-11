import React from "react";
import "./Student.css";

function Exam(props) {
  const { subject, marks, grade, date } = props;

  return (
    <div className="exam-card">
      <h4>{subject}</h4>

      <p>
        <strong>Marks:</strong> {marks}
      </p>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

      <p>
        <strong>Exam Date:</strong> {date}
      </p>

      <span
        className={
          marks >= 50 ? "status-pass" : "status-fail"
        }
      >
        {marks >= 50 ? "Pass" : "Fail"}
      </span>
    </div>
  );
}

export default Exam;