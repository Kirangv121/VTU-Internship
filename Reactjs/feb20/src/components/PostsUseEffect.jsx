import { useState, useEffect } from "react";

function PostsUseEffect() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Posts fetch failed");
        }
      })
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h3>Latest Posts</h3>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        posts.map((p) => (
          <div key={p.id}>
            <strong>{p.title}</strong>
          </div>
        ))
      )}
    </div>
  );
}

export default PostsUseEffect;