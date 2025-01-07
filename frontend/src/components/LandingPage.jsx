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
            fontFamily: "'Papyrus', cursive", // Apply new font here
          }}
        >
          <h2
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
          </h2>
          <h1
            style={{
              fontSize: "6rem",
              color: "rgba(95, 66, 22, 0.65)",
              marginTop: "-30px",
              fontFamily: "'Papyrus', sans-serif", // Same font for both Mike and AI Playground
            }}
          >
            AI playground
          </h1>
          <p
            style={{
              fontSize: "1.5rem", // Adjust font size as needed
              color: "rgba(10, 9, 9, 0.75)", // Change text color if needed
              marginTop: "100px", // Adjust this value to push it further down
            }}
          >
            it's not the plane, it's the pilot
          </p>
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            margin: "50px auto",
            maxWidth: "95%",
            gap: "30px", // Space between photo & paragraph
          }}
        >
          {/* Left Section: Photo and Icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack photo & icons vertically
              alignItems: "center",
              width: "25%", // Take up 25% of the width
            }}
          >
            {/* Photo */}
            <img
              src="src/assets/aashna.JPG" // Replace with actual photo link
              alt="Your Photo"
              style={{
                marginTop: "-30px",
                width: "300px", // Larger size for photo
                height: "300px",
                borderRadius: "50%", // Circular shape
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
                marginBottom: "80px", // Space below photo
                animation: "floatAndBounce 2s infinite", // Add animation

              }}
            />
            {/* Icons */}
            <div
              style={{
                display: "flex",
                flexDirection: "row", // Icons in a row
                justifyContent: "center",
                gap: "15px", // Space between icons
              }}
            >
              {/* GitHub Icon */}
              <a
                href="your-github-link-here" // Replace with your GitHub URL
                target="_blank"
                
                rel="noopener noreferrer"
                style={{
                  color: "#333", // Icon color
                  textDecoration: "none",
                  animation: "floatAndBounce 2s infinite", // Add animation
                }}
              >
                <i className="fab fa-github" style={{ fontSize: "5rem" }}></i>
              </a>
              {/* LinkedIn Icon */}
              <a
                href="your-linkedin-link-here" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0077b5", // LinkedIn brand color
                  textDecoration: "none",
                  animation: "floatAndBounce 2s infinite", // Add animation
                }}
              >
                <i className="fab fa-linkedin" style={{ fontSize: "5rem" }}></i>
              </a>
              {/* Resume Icon */}
              <a
                href="your-resume-link-here" // Replace with your resume URL
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#555", // Icon color
                  textDecoration: "none",
                  animation: "floatAndBounce 2s infinite", // Add animation
                }}
              >
                <i className="fas fa-file-alt" style={{ fontSize: "5rem" }}></i>
              </a>
            </div>
          </div>

          {/* Right Section: Paragraph */}
          <div
            style={{
              width: "90%", // Paragraph takes 70% width
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem", // Adjust font size
                color: "rgba(10, 9, 9, 0.75)", // Text color
                lineHeight: "1.6", // Better readability
              }}
            >
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                rel="stylesheet"
              />

              hi, i am aashna. i am an aspiring AI developer. i love innovation and this is my
              playground to play with and showcase my skills in AI, development,
              writing. i am currently a college student working towards building
              something amazing. apart from AI, i love to read about history,
              mathematics, technology, and business, and i want to travel around the
              world. 
              
            </p>
          </div>
        </div>
      </section>

      <style>
        {`
          /* Animation for floating and bouncing effect */
          @keyframes floatAndBounce {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
