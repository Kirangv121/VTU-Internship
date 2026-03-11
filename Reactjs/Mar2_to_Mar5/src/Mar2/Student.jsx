import React from "react";
import "./Student.css";
import Exam from "./Exam";

function Student(props) {
  const { name, usn, course, semester, subjects } = props;

  return (
    <div className="student-card">
      <div className="student-header">
        <h2>Student Information</h2>
      </div>

      <div className="student-body">
        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>USN:</strong> {usn}
        </p>

        <p>
          <strong>Course:</strong> {course}
        </p>

        <p>
          <strong>Semester:</strong> {semester}
        </p>

        <h3 className="subject-title">Subjects & Exam Details</h3>

        <div className="exam-list">
          {subjects.map((sub, index) => (
            <Exam
              key={index}
              subject={sub.subject}
              marks={sub.marks}
              grade={sub.grade}
              date={sub.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Student;