import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import videoBg from "../assets/videoBg.mp4";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoStyle = {
    opacity: Math.max(0, 1 - scrollPosition / 300),
    transform: `scale(${1 + scrollPosition / 1000})`,
    transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div>
      <Navbar />
      <section
        id="home"
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Lighten overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.4)", // Lightening effect
            zIndex: 0, // Below content but above video
          }}
        ></div>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          style={videoStyle}
        ></video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            zIndex: 1,
            fontFamily: "'Roboto', cursive", // Apply new font here
          }}
        >
          <h1
            style={{
              fontSize: "6rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "rgba(95, 66, 22, 0.65)", // Corrected the typo and color format
              marginBottom: "1px", // Space between Mike and AI Playground
            }}
          >
            aashna's
          </h1>
          <h2
            style={{
              fontSize: "4rem",
              color: "rgba(95, 66, 22, 0.65)",
              marginTop: "0",
              fontFamily: "'Arial', sans-serif", // Same font for both Mike and AI Playground

            }}
          >
            AI playground
          </h2>
          <p
          style={{
            fontSize: "1.5rem", // Adjust font size as needed
            color: "rgba(10, 9, 9, 0.75)", // Change text color if needed
            marginTop: "50px", // Adjust this value to push it further down
          }}
          >it's not the plane, it's the pilot</p>
        </div>
      </section>

      <section
        id="about"
        style={{
          height: "100vh",
          backgroundColor: "#f4f4f4",
          padding: "40px",
          margin: 0,
          scrollBehavior: "smooth", // Enable smooth scrolling
        }}
      >
        <h2>About Aashna Dogra</h2>
        <p>We create amazing experiences for our users.</p>
      </section>
    </div>
  );
};

export default LandingPage;
