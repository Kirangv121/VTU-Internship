import { useState, useEffect } from "react";

function JsonUsersUseEffect() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setUsers(data.slice(0, 5));
        } else {
          setMessage("No users found");
        }
      })
      .catch(() => setMessage("Error fetching users"));
  }, []);

  return (
    <div >
		<hr />
      <h3>JSON Users</h3>

      {message ? (
        <p>{message}</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
	  <hr />
    </div> 
  );
}

export default JsonUsersUseEffect;