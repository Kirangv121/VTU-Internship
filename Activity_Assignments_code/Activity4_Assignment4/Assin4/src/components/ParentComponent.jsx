import { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./CallbackUI.css";

function ParentComponent() {

  // Parent state to store data received from child
  const [message, setMessage] = useState("No message received yet");

  // Callback function passed to child
  const receiveMessageFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div className="parent-card">

      <h1 className="title">Child → Parent Communication</h1>

      <p className="description">
        This example demonstrates how a child component can send data back
        to a parent component using callback functions.
      </p>

      <div className="message-box">
        <h3>Message Received in Parent:</h3>
        <p className="message">{message}</p>
      </div>

      <ChildComponent sendData={receiveMessageFromChild} />

    </div>
  );
}

export default ParentComponent;