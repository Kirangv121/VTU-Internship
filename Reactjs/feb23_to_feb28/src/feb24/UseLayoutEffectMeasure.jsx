import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffectMeasure() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [bgColor, setBgColor] = useState("#0d6efd");

  // ================= LAYOUT EFFECT =================
  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setWidth(rect.width);

      // conditional UI logic
      if (rect.width > 300) {
        setBgColor("#198754");
      } else {
        setBgColor("#0d6efd");
      }
    }
  });

  return (
    <div className="container mt-4">
      <h3>useLayoutEffect — DOM Measurement</h3>

      <div
        ref={boxRef}
        style={{
          width: "60%",
          padding: "40px",
          backgroundColor: bgColor,
          color: "white",
          borderRadius: "10px",
          transition: "0.3s"
        }}
      >
        Resize the window
      </div>

      <p className="mt-3">
        Measured Width: <strong>{Math.round(width)}px</strong>
      </p>
    </div>
  );
}

export default UseLayoutEffectMeasure;