import React, { useRef } from "react";
import "./Student.css"
function JumbotronUseRef() {

  // ===== useRef Example 1 (focus input) =====
  const nameInputRef = useRef(null);

  const focusInput = () => {
    nameInputRef.current.focus();
  };

  // ===== useRef Example 2 (change text dynamically) =====
  const messageRef = useRef(null);

  const changeMessage = () => {
    messageRef.current.innerText =
      "Welcome! You successfully changed this text using useRef.";
  };

  return (
    <div className="container">

      {/* ===== Lesson 31 : Jumbotron Section ===== */}
      <div className="jumbotron-section">
        <h1>React Learning Dashboard</h1>
        <p>
          This section demonstrates Jumbotron layout along with useRef hook
          examples. It provides interactive UI elements and dynamic DOM access.
        </p>
        <button className="main-btn">Explore Features</button>
      </div>

      {/* ===== Lesson 32 : useRef Example 1 ===== */}
      <div className="card-box">
        <h2>useRef Example 1 - Focus Input</h2>

        <input
          type="text"
          placeholder="Enter your name"
          ref={nameInputRef}
          className="input-field"
        />

        <button className="action-btn" onClick={focusInput}>
          Focus Input
        </button>
      </div>

      {/* ===== Lesson 33 : useRef Example 2 ===== */}
      <div className="card-box">
        <h2>useRef Example 2 - Update Text</h2>

        <p ref={messageRef} className="message-text">
          Click the button to update this message.
        </p>

        <button className="action-btn" onClick={changeMessage}>
          Change Message
        </button>
      </div>

    </div>
  );
}

export default JumbotronUseRef;
