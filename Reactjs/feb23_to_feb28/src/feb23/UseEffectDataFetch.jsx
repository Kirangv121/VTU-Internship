import { useState, useEffect } from "react";

function UseEffectDataFetch() {
  // ================= STATE =================
  const [users, setUsers] = useState([]);
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= DATA FETCH =================
  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch users");
        }
      })
      .then((data) => {
        if (isMounted) {
          setUsers(data.slice(0, 5));
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // ================= SUBSCRIPTION =================
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // ================= CLEANUP =================
    return () => {
      isMounted = false;
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // ================= UI =================
  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mt-4">
      <h3>useEffect — Data Fetch + Subscription</h3>

      <p>
        Network Status:{" "}
        <strong className={onlineStatus ? "text-success" : "text-danger"}>
          {onlineStatus ? "Online" : "Offline"}
        </strong>
      </p>

      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectDataFetch;