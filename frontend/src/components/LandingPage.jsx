import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import videoBg from "../assets/videoBg.mp4";
import blog1Image from '../assets/blog1.png';
import blog2Image from '../assets/blog2.png';
import blog3Image from '../assets/blog3.jpg';
import blog4Image from '../assets/blog4.png';
import blog5Image from '../assets/blog5.png';
import blog6Image from '../assets/blog6.jpg';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Blogs data with external links
  const [blogs] = useState([
    { title: 'Blog 1', image: blog1Image, link: '/blog1' },
    { title: 'Blog 2', image: blog2Image, link: '/blog2' },
    { title: 'Blog 3', image: blog3Image, link: '/blog3' },
    { title: 'Blog 4', image: blog4Image, link: '/blog4' },
    { title: 'Blog 5', image: blog5Image, link: '/blog5' },
    { title: 'Blog 6', image: blog6Image, link: '/blog6' },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  const TypingText = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText =
      "Hi, I am Aashna. I am an aspiring AI developer. I love innovation, and this is my playground to play with and showcase my skills in AI, development, and writing. I am currently a college student working towards building something amazing. Apart from AI, I love to read about history, mathematics, technology, and business, and I want to travel around the world.";

    useEffect(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }, [fullText]);

    return (
      <div
        style={{
          textAlign: "center",
          margin: "10px",
          marginRight: "10px",
          width: "80%",
        }}
      >
        <p
          style={{
            lineHeight: "1.5",
            fontSize: "2rem",
            fontFamily: "'Montserrat'",
            color: "#333",
            marginLeft: "50px",
            marginTop: "-50px",
          }}
        >
          {displayedText}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
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
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            zIndex: 0,
          }}
        ></div>
        <video src={videoBg} autoPlay loop muted style={videoStyle}></video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            zIndex: 1,
            fontFamily: "'Papyrus', cursive",
          }}
        >
          <h2 style={{ fontSize: "6rem", marginBottom: "1px", color: "#5f4216" }}>
            aashna's
          </h2>
          <h1 style={{ fontSize: "6rem", marginTop: "-30px", color: "#5f4216" }}>
            AI playground
          </h1>
          <p style={{ fontSize: "1.5rem", marginTop: "100px", color: "#0a0909" }}>
            it's not the plane, it's the pilot
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
          padding: "40px",
          margin: 0,
          scrollBehavior: "smooth",
        }}
      >
        <h2>About Aashna Dogra</h2>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            margin: "50px auto",
            maxWidth: "95%",
            gap: "30px",
          }}
        >
          {/* Left Section: Photo and Icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "25%",
            }}
          >
            <img
              src="src/assets/aashna.JPG"
              alt="Your Photo"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                marginBottom: "30px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              {/* GitHub Icon */}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i
                  className="fab fa-github"
                  style={{ fontSize: "5rem", color: "#333" }}
                ></i>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i
                  className="fab fa-linkedin"
                  style={{ fontSize: "5rem", color: "#0077b5" }}
                ></i>
              </a>

              {/* Resume Icon */}
              <a
                href="your-resume-link-here"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <i
                  className="fas fa-file-alt"
                  style={{ fontSize: "5rem", color: "#555" }}
                ></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div style={{ width: "70%", textAlign: "center" }}>
            <TypingText />
          </div>
        </div>
      </section>

      {/* Blog Cards Section - Now just cards with external links */}
      <section id="blogs" style={{ 
        padding: '50px 30px', 
        backgroundColor: '#f4f4f4', 
        fontFamily: 'Cursive',
        minHeight: '100vh' 
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '4rem', fontWeight: 'normal' }}>
          my thoughts and insights on ...
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {blogs.map((blog, index) => (
            <a 
              key={index}
              href={blog.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  width: '300px',
                  height: '300px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="blog-card"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                  className="blog-card-img"
                />
                <h3
                  style={{
                    marginTop: '20px',
                    fontSize: '1.2rem',
                    fontWeight: 'normal',
                  }}
                  className="blog-card-title"
                >
                  {blog.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Global CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          
          .icon-link {
            font-size: 5rem;
            color: #333;
            text-decoration: none;
            transition: transform 0.3s, color 0.3s;
          }

          .icon-link:hover {
            transform: scale(1.2);
            color: #0077b5; /* Highlight color for hover */
          }

          @keyframes floatAndBounce {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          .fab, .fas {
            animation: floatAndBounce 2s infinite;
          }
          
          .blog-card {
            position: relative;
            overflow: hidden;
            background-color: white;
          }
          
          .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          
          .blog-card-img {
            transition: transform 0.5s ease;
          }
          
          .blog-card:hover .blog-card-img {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;