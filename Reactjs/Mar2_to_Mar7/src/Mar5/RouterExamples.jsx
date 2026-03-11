import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

// ===== Simple Pages =====

function Home() {
  return (
    <div className="page-box">
      <h2>Home Page</h2>
      <p>Welcome to the React Router example project.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page-box">
      <h2>About Page</h2>
      <p>This page explains how routing works in React applications.</p>
    </div>
  );
}

// ===== Router2 Dynamic Route =====

function StudentDetails() {
  const { name } = useParams();

  return (
    <div className="page-box">
      <h2>Student Details</h2>
      <p>Student Name: <strong>{name}</strong></p>
      <p>This page uses dynamic routing with URL parameters.</p>
    </div>
  );
}

function RouterExamples() {
  return (
    <Router>

      {/* Navigation Menu */}
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/student/Kiran">Kiran</Link>
        <Link to="/student/Aadya">Aadya</Link>
      </div>

      {/* Routes */}
      <Routes>

        {/* Lesson 39 : Basic Router */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Lesson 40 : Dynamic Router */}
        <Route path="/student/:name" element={<StudentDetails />} />

      </Routes>

    </Router>
  );
}

export default RouterExamples;
