import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import videoBg from "../assets/videoBg.mp4";
import blog1Image from '../assets/blog1.png';
import blog2Image from '../assets/blog2.png';
import blog3Image from '../assets/blog3.jpg';
import blog4Image from '../assets/blog4.png';
import blog5Image from '../assets/blog5.png';
import blogImage from '../assets/blog.jpg';

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [blogs] = useState([
    { title: 'Blog 1', image: blogImage, link: 'https://www.google.com' },
    { title: 'Blog 2', image: blogImage, link: 'https://www.google.com' },
    { title: 'Blog 3', image: blogImage, link: 'https://www.google.com' },
    { title: 'Blog 4', image: blogImage, link: 'https://www.google.com' },
    { title: 'Blog 5', image: blogImage, link: 'https://www.google.com' },
    { title: 'Blog 6', image: blogImage, link: 'https://www.google.com' },
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
    'Hii, I am Aashna. I am an aspiring AI developer. I love innovation, and this is my playground to play with and showcase my skills in AI, development, and writing. I am currently a college student working towards building something amazing. Apart from AI, I love to read about history, mathematics, technology, and business, and I want to travel around the world. The theme of this app is TopGun because it is my favourite movie and this is an experimentation. The scope of this webapp is currently '
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
          marginTop: "20px",
          marginRight: "10px",
          width: "95%",
        }}
      >
        <p
          style={{
            lineHeight: "1.5",
            fontSize: "1.7rem",
            fontFamily: "'Papyrus'",
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
              src="src/assets/aashnaa.JPG"
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
                href="https://www.github.com/aashnadogra"
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
                href="https://www.linkedin.com/in/aashna-dogra-aaa93624a/"
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
                href="https://drive.google.com/file/d/1UaUHjEg71-9l8MFugzqxt1BpTIv1UjPU/view?usp=sharing"
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

      <section
  id="explore1"
  style={{
    minHeight: "100vh",
    backgroundColor: "#fff",
    padding: "40px",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  }}
>
  {/* Right side now appears first - Text content */}
  <div style={{ flex: "1", maxWidth: "50%", padding: "20px" }}>
    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Leetcode AI Assistant</h2>
    <div style={{ marginBottom: "30px" }}>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>AI Assistant</strong> — to help solve leetcode problems
        just like a human mentor!
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
      Built an intelligent LeetCode assistant that provides real-time problem analysis, pattern recognition, and hints tailored to a user's history. Integrated with FastAPI for asynchronous processing and React frontend for interactive feedback.

      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>

The assistant uses embeddings and classification models to recommend similar problems and guide users with structured hints. It has been particularly useful in interview prep and daily practice.
      </p>
    </div>
    <button
      style={{
        backgroundColor: "#4c3b29",
        color: "white",
        border: "none",
        padding: "12px 25px",
        borderRadius: "5px",
        fontSize: "1.1rem",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#886f27"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#4c3b29"}
    >
      wanna try?
    </button>
  </div>

  {/* Image now on the right */}
  <div style={{ flex: "1", maxWidth: "45%" }}>
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/src/assets/leetcode-assistant.png"
        alt="People collaborating on pitchdeck"
        style={{
          maxWidth: "100%",
          maxHeight: "500px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  </div>
</section>


      <section
        id="explore2"
        style={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          padding: "40px",
          margin: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {/* Left side - Image */}
        <div style={{ flex: "1", maxWidth: "45%" }}>
          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/src/assets/brainai.png" 
              alt="People collaborating on pitchdeck"
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
           
          </div>
        </div>

        {/* Right side - Text content */}
        <div style={{ flex: "1", maxWidth: "50%", padding: "20px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>brainAI</h2>
          
          <div style={{ marginBottom: "30px" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
              <strong>Brain Tumor Detection</strong> — To detect tumor types, understand what happens in the model and look at an augmented dataset
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
            Developed a deep learning pipeline using a ResNet-based Convolutional Neural Network (CNN) to classify brain tumors from MRI images. Enhanced model interpretability by implementing Explainable AI (xAI) techniques, applying LIME on a VGG model to visualize and highlight influential regions in predictions.

            </p>
            
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Built an interactive web interface using HTML, CSS, JavaScript, and Flask to allow users to upload scans and receive real-time diagnostic feedback. The project leveraged Python, TensorFlow, and LIME for end-to-end deployment of an interpretable medical AI system.

            </p>
          </div>
          
          <button
            style={{
              backgroundColor: "#4c3b29",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#886f27"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#4c3b29"}
          >
            wanna try?
          </button>
        </div>
      </section>

      <section
  id="explore3"
  style={{
    minHeight: "100vh",
    backgroundColor: "#fff",
    padding: "40px",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  }}
>
  {/* Right side now appears first - Text content */}
  <div style={{ flex: "1", maxWidth: "50%", padding: "20px" }}>
    <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>PDF QA</h2>
    <div style={{ marginBottom: "30px" }}>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        <strong>PDF QA chat</strong> — RAG based
        app to chat with your pdf and ask questions from it's content
      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
      Implemented a Retrieval-Augmented Generation (RAG) pipeline for querying large PDF documents. Combined vector search with a transformer-based QA model to deliver accurate, context-rich answers from documents.

      </p>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
      Users can upload PDFs and ask natural language questions, receiving instant answers sourced directly from the text. It’s ideal for research, legal, academic, or internal documentation purposes.

      </p>
    </div>
    <button
      style={{
        backgroundColor: "#4c3b29",
        color: "white",
        border: "none",
        padding: "12px 25px",
        borderRadius: "5px",
        fontSize: "1.1rem",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "#886f27"}
      onMouseOut={(e) => e.target.style.backgroundColor = "#4c3b29"}
    >
      wanna try?
    </button>
  </div>

  {/* Image now on the right */}
  <div style={{ flex: "1", maxWidth: "45%" }}>
    <div
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/src/assets/rag-qa.png"
        alt="People collaborating on pitchdeck"
        style={{
          maxWidth: "100%",
          maxHeight: "500px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  </div>
</section>

<section
        id="explore4"
        style={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          padding: "40px",
          margin: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {/* Left side - Image */}
        <div style={{ flex: "1", maxWidth: "45%" }}>
          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/src/assets/coming.jpg" 
              alt="People collaborating on pitchdeck"
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
           
          </div>
        </div>

        {/* Right side - Text content */}
        <div style={{ flex: "1", maxWidth: "50%", padding: "20px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>AI Note-taking Agent</h2>
          
          <div style={{ marginBottom: "30px" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
              <strong>AI Agent</strong> — made with crewai to make structured notes with docs, pdfs, ausio, video
            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
            Designed an AI agent capable of listening to lectures, meetings, or reading documents and summarizing them into concise, structured notes. Powered by transformers and summarization models with topic extraction.

            </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            The agent supports multiple formats including text, speech-to-text inputs, and integrates with productivity tools like Notion or Google Docs. It boosts productivity by automating the note-taking process across domains.

            </p>
          </div>
          
          <button
            style={{
              backgroundColor: "#4c3b29",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#886f27"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#4c3b29"}
          >
            wanna try?
          </button>
        </div>
      </section>


      {/* Blog Cards Section - Now just cards with external links */}
      <section id="blogs" style={{ 
        padding: '50px 30px', 
        backgroundColor: '#f4f4f4', 
        fontFamily: 'Papyrus',
        minHeight: '100vh' 
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '4rem', fontWeight: 'normal' }}>
          My thoughts on ...
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
            color:rgba(181, 81, 0, 0.83); /* Highlight color for hover */
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