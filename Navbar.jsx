import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">DEV@Deakin</div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="actions">
        <button>Post</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
