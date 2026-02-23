import { useEffect } from "react";

function UseEffectExa1() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h3>Example 1: useEffect on Mount</h3>
      <p>Check console when component loads.</p>
    </div>
  );
}

export default UseEffectExa1;