import { useState, useEffect, useLayoutEffect, useInsertionEffect, useMemo, useRef } from "react";

function HooksDashboard() {
  // ================= STATES =================
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("all");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const cardRef = useRef(null);

  // ================= useEffect — fetch tasks =================
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => {
        setTasks(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // ================= useLayoutEffect — measure card width =================
  const [cardHeight, setCardHeight] = useState(0);
  useLayoutEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.getBoundingClientRect().height);
    }
  }, [tasks]);

  // ================= useInsertionEffect — theme styles =================
  useInsertionEffect(() => {
    let styleTag = document.getElementById("dashboard-theme");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "dashboard-theme";
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML =
      theme === "dark"
        ? `body { background: #121212; color: #f0f0f0; }`
        : `body { background: #f9f9f9; color: #121212; }`;
  }, [theme]);

  // ================= useMemo — completed tasks =================
  const completedCount = useMemo(() => {
    console.log("Calculating completed tasks...");
    return tasks.filter((t) => t.completed).length;
  }, [tasks]);

  // ================= Event Handlers =================
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const handleFilter = (type) => setFilter(type);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  // ================= Window Resize Listener =================
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ================= RENDER =================
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hooks Dashboard</h2>
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center" ref={cardRef}>
            <h5>Total Tasks</h5>
            <p className="fs-3">{tasks.length}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center bg-success text-white">
            <h5>Completed</h5>
            <p className="fs-3">{completedCount}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 text-center bg-warning">
            <h5>Card Height (px)</h5>
            <p className="fs-3">{Math.round(cardHeight)}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h5>Filter Tasks</h5>
        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="btn btn-sm btn-outline-success me-2" onClick={() => handleFilter("completed")}>
          Completed
        </button>
        <button className="btn btn-sm btn-outline-warning" onClick={() => handleFilter("pending")}>
          Pending
        </button>
      </div>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.title}</td>
                  <td>
                    {t.completed ? (
                      <span className="badge bg-success">Completed</span>
                    ) : (
                      <span className="badge bg-warning text-dark">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-3">
        <p>Window Width: {windowWidth}px</p>
      </div>
    </div>
  );
}

export default HooksDashboard;