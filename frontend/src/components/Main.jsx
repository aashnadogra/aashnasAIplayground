// src/components/Main.jsx
import React, { useEffect, useState } from 'react';
import videoBg from '../assets/videoBg.mp4';

const Main = () => {
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position using window.scrollY
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Set scroll position to state
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically set the video background style based on scroll position
  const videoStyle = {
    opacity: 1 - scrollPosition / 600,  // Fade out the video as user scrolls more quickly
    transform: `scale(${1 + scrollPosition / 1000})`, // Adjust the scale to zoom faster as the user scrolls
    transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', // Quick transition effect
  };

  return (
    <div className="main">
      <div className="overlay"></div>

      {/* Apply dynamic styles to video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        style={videoStyle}
      />

      <div className="content">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>

      <div className="sections">
        {/* Home Section */}
        <section id="home">
          <h2>Home</h2>
        </section>

        {/* Other Sections */}
        <section id="about">
          <h2>About</h2>
        </section>

        <section id="explore">
          <h2>Explore</h2>
        </section>

        <section id="blogs">
          <h2>Blogs</h2>
        </section>
      </div>
    </div>
  );
};

export default Main;