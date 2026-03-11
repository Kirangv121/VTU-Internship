import React from "react"
import Student from "./Mar2/Student";

function App() {
  const studentSubjects = [
    { subject: "Mathematics", marks: 85, grade: "A", date: "2026-02-10" },
    { subject: "Physics", marks: 78, grade: "B+", date: "2026-02-12" },
    { subject: "Chemistry", marks: 65, grade: "B", date: "2026-02-15" },
    { subject: "Computer Science", marks: 92, grade: "A+", date: "2026-02-18" }
  ];

  return (
    <div>
      <Student
        name="Kiran"
        usn="1RV21CS101"
        course="B.E Computer Science"
        semester="6"
        subjects={studentSubjects}
      />
    </div>
  );
}

export default App;