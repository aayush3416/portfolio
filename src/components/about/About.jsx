import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import { GiBookmarklet } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <GiBookmarklet className="about__icon" />
              <h5>Courses</h5>
              <small>8+ Programming Courses</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello! I am a third-year Mechatronics Engineering student at the
            University of Waterloo, where I intend to specialize into Software
            Engineering or Artificial Intelligence. I am firm beliver and working
            smart and not hard. I am always looking for new opportunities,
            so feel free to reach out!

          </p>

          <a href="#footer" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
