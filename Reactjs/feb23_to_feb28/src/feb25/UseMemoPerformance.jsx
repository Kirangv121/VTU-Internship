import { useState, useMemo } from "react";

function UseMemoPerformance() {
  // ================= STATE =================
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  // ================= EXPENSIVE FUNCTION =================
  const expensiveCalculation = (num) => {
    console.log("🔴 Expensive calculation running...");

    let result = 0;

    // simulate heavy work
    for (let i = 0; i < 500000000; i++) {
      result += num;
    }

    return result;
  };

  // ================= MEMOIZED VALUE =================
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  // ================= UI =================
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-dark text-white">
          <h3 className="mb-0">useMemo Performance Optimization -25 Feb 2026 </h3>
          <h2>Exploring all react hooks</h2>
        </div>

        <div className="card-body">
          {/* Counter (should NOT trigger expensive calc) */}
          <div className="mb-3">
            <h5>Unrelated Counter</h5>
            <p className="fs-4">{count}</p>
            <button
              className="btn btn-primary"
              onClick={() => setCount(count + 1)}
            >
              Increment Counter
            </button>
          </div>

          <hr />

          {/* Number input (should trigger expensive calc) */}
          <div className="mb-3">
            <h5>Expensive Calculation Input</h5>

            <input
              type="number"
              className="form-control w-25"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
          </div>

          <div className="alert alert-success">
            <strong>Memoized Result:</strong> {memoizedValue}
          </div>

          <div className="alert alert-info">
            ✅ Expensive function runs ONLY when number changes
          </div>
        </div>

        <div className="card-footer text-muted text-center">
          Open console to observe performance behavior
        </div>
      </div>
    </div>
  );
}

export default UseMemoPerformance;