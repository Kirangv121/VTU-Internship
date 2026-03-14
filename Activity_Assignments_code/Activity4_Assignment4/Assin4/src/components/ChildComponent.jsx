function ChildComponent({ sendData }) {

  const sendMessage = () => {

    const data = "Hello Parent! This message was sent from the Child Component.";

    // Calling parent callback
    sendData(data);
  };

  return (
    <div style={{marginTop:"20px"}}>

      <button onClick={sendMessage} className="send-btn">
        Send Message to Parent
      </button>

    </div>
  );
}

export default ChildComponent;