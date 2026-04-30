import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { GiBookmarklet } from 'react-icons/gi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <span className="section-label reveal">About</span>
        <h2 className="reveal">A bit about me</h2>

        <div className="about__grid reveal">
          <div className="about__card">
            <FaAward className="about__card-icon" />
            <h4>Experience</h4>
            <span>3+ Years Working</span>
          </div>

          <div className="about__card">
            <GiBookmarklet className="about__card-icon" />
            <h4>Education</h4>
            <span>Mechatronics Engineering</span>
          </div>

          <div className="about__card">
            <VscFolderLibrary className="about__card-icon" />
            <h4>Projects</h4>
            <span>20+ Completed</span>
          </div>
        </div>

        <p className="about__text reveal">
          I'm a third-year Mechatronics Engineering student at the University of Waterloo,
          where I intend to specialize in Software Engineering or Artificial Intelligence.
          I'm a firm believer in working smart — not just hard. I'm always looking for new
          opportunities to build impactful software, so feel free to reach out!
        </p>

        <div className="reveal">
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
