import { useState, useEffect } from "react";

function GithubUserUseEffect() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch GitHub users");
        }
      })
      .then((data) => {
        setUsers(data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading GitHub users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>GitHub Users</h3>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} width="50" />
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  );
}

export default GithubUserUseEffect;