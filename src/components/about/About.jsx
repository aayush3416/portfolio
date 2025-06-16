import React, { useEffect, useRef } from 'react';
import './about.css';
import ME from '../../assests/me-about.jpg';
import { FaAward, FaGraduationCap, FaCode } from 'react-icons/fa';
import { GiBookmarklet } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Add staggered animation for cards
          if (entry.target.classList.contains('about__cards')) {
            const cards = entry.target.querySelectorAll('.about__card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements with enhanced timing
    if (imageRef.current) {
      setTimeout(() => observer.observe(imageRef.current), 100);
    }
    if (contentRef.current) {
      setTimeout(() => observer.observe(contentRef.current), 300);
    }
    
    // Observe cards container for staggered animation
    const cardsContainer = document.querySelector('.about__cards');
    if (cardsContainer) {
      setTimeout(() => observer.observe(cardsContainer), 500);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="about" ref={aboutRef}>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" ref={imageRef}>
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>

        <div className="about__content" ref={contentRef}>
          <div className="about__cards">
            <article className="about__card" ref={addToRefs}>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card" ref={addToRefs}>
              <GiBookmarklet className="about__icon" />
              <h5>Education</h5>
              <small>Mechatronics Engineering</small>
            </article>

            <article className="about__card" ref={addToRefs}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          
          <p>
            Hello! I am a third-year Mechatronics Engineering student at the University of Waterloo,
            where I intend to specialize into Software Engineering or Artificial Intelligence. I am a firm believer
            in working smart and not hard. I am always looking for new opportunities, so feel free to reach out!
          </p>

          <a href="#footer" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
