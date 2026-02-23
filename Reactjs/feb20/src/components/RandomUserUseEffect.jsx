import { useState, useEffect } from "react";

function RandomUserUseEffect() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setUser(data.results[0]);
        } else {
          setError("User not available");
        }
      })
      .catch(() => setError("Failed to load user"));
  }, []);

  return (
    <div>
		<hr />
      <h3>Random User</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <img src={user.picture.medium} />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      )}
	  <hr />
    </div>
  );
}

export default RandomUserUseEffect;