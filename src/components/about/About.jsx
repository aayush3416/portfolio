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
              <small>1+ Years Working</small>
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
            Hello! I am a first-year Mechatronics Engineering student at the
            University of Waterloo, where I intend to specialize into Software
            Engineering or Artificial Intelligence. I am really interested in
            software development, machine learning, and machine design, and I
            enjoy working on projects that are related to these disciplines. I
            aspire to apply the knowledge I learn to create various apps,
            platforms, and media to change our world. I am a dedicated,
            persistent, and enthusiastic team member that strives to overcome
            difficulties and improve team morale wherever feasible. Through work
            experience and extracurricular activities, I have acquired excellent
            interpersonal and analytical skills, which will inevitably help me
            thrive in the work force. I am always looking for new opportunities,
            so feel free to reach out!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About