import { useState, useEffect } from "react";

function GithubSearchUseEffect() {
  const [query, setQuery] = useState("react");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setUsers(data.items.slice(0, 5));
        } else {
          setUsers([]);
        }
      })
      .catch(() => setUsers([]));
  }, [query]);

  return (
    <div>
		<hr />
      <h3>Search GitHub Users</h3>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      {users.map((u) => (
        <p key={u.id}>{u.login}</p>
      ))}
    </div>
  );
}

export default GithubSearchUseEffect;