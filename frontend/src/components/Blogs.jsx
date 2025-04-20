import React, { useState, useEffect, useRef } from 'react';
import blog1Image from '../assets/blog1.png';
import blog2Image from '../assets/blog2.png';
import blog3Image from '../assets/blog3.jpg';
import blog4Image from '../assets/blog4.png';
import blog5Image from '../assets/blog5.png';
import blog6Image from '../assets/blog6.jpg';

const BlogPage = () => {
  const [blogs] = useState([
    { title: 'Blog 1', image: blog1Image, id: 'blog1', content: 'This is the content of Blog 1.' },
    { title: 'Blog 2', image: blog2Image, id: 'blog2', content: 'This is the content of Blog 2.' },
    { title: 'Blog 3', image: blog3Image, id: 'blog3', content: 'This is the content of Blog 3.' },
    { title: 'Blog 4', image: blog4Image, id: 'blog4', content: 'This is the content of Blog 4.' },
    { title: 'Blog 5', image: blog5Image, id: 'blog5', content: 'This is the content of Blog 5.' },
    { title: 'Blog 6', image: blog6Image, id: 'blog6', content: 'This is the content of Blog 6.' },
  ]);

  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in');
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold for when to trigger fade-in/out
      }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToBlog = (id) => {
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop - 50,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ fontFamily: 'Cursive' }}>
      <section id="landing" style={{ padding: '30px', backgroundColor: '#f4f4f4' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '4rem', fontWeight: 'normal' }}>
          my thoughts and insights on ...
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {blogs.map((blog) => (
            <div
              key={blog.id}
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
              onClick={() => scrollToBlog(blog.id)}
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
                  marginTop: '10px',
                  fontSize: '1.2rem',
                  fontWeight: 'normal',
                }}
                className="blog-card-title"
              >
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {blogs.map((blog, index) => (
        <section
          key={blog.id}
          id={blog.id}
          ref={(el) => (contentRefs.current[index] = el)}
          className="blog-section fade-out"
          style={{
            padding: '40px',
            marginTop: '20px',
            backgroundColor: '#fff',
            minHeight: '100vh',
          }}
        >
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </section>
      ))}
    </div>
  );
};

export default BlogPage;
