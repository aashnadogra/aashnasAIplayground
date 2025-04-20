import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // Lightened navbar color
        color: "black", // Updated text color for contrast
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        zIndex: 1000,
        backdropFilter: "blur(10px)", // Add a subtle blur effect
      }}
    >
      <a href="#home" style={{ color: "black", textDecoration: "none" }}>
        home
      </a>
      <a href="#about" style={{ color: "black", textDecoration: "none" }}>
        aashna, who?
      </a>
      <a href="#explore1" style={{ color: "black", textDecoration: "none" }}>
        play around
      </a>
      <a href="#blogs" style={{ color: "black", textDecoration: "none" }}>
        blogs
      </a>

    </nav>
  );
};

export default Navbar;