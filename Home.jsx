import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top navigation bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>DEV@Deakin</div>
        <input
          type="text"
          placeholder="Search..."
          style={styles.search}
        />
        <div style={styles.links}>
          <button style={styles.navBtn}>Post</button>
          <button
            style={styles.navBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    padding: "10px 20px",
    borderBottom: "1px solid #007BFF",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  search: {
    flex: 1,
    margin: "0 20px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  links: {
    display: "flex",
    gap: "10px",
  },
  navBtn: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
};
