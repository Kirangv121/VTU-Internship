import { useState, useInsertionEffect } from "react";

function UseInsertionEffectStyles() {
  const [theme, setTheme] = useState("light");

  // ================= INSERTION EFFECT =================
  useInsertionEffect(() => {
    const styleId = "dynamic-theme-style";
    let styleTag = document.getElementById(styleId);

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    if (theme === "dark") {
      styleTag.innerHTML = `
        body {
          background-color: #121212;
          color: #ffffff;
        }
      `;
    } else {
      styleTag.innerHTML = `
        body {
          background-color: #ffffff;
          color: #000000;
        }
      `;
    }

    return () => {
      // optional cleanup logic
    };
  }, [theme]);

  return (
    <div className="container mt-4">
      <h3>useInsertionEffect — Dynamic Theme Injection</h3>

      <p>Current Theme: <strong>{theme}</strong></p>

      <button
        className="btn btn-primary"
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default UseInsertionEffectStyles;