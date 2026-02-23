import { useState, useEffect } from "react";

function UseEffectExa3() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Example 3: Live Clock</h3>
      <h2>{time}</h2>
    </div>
  );
}

export default UseEffectExa3;