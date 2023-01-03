import React from 'react'
import './portfolio.css'
import IMG0 from "../../assests/project0.png";
import IMG1 from '../../assests/project1.png'
import IMG2 from '../../assests/project2.png'
import IMG3 from '../../assests/project3.png'
import IMG4 from '../../assests/project4.png'
import IMG5 from '../../assests/project5.jpeg'
import IMG6 from '../../assests/project6.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG0} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>StoreFront Ecommerce</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/storefront-ecommerce"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://storefront-env.eba-xz9bwhj2.us-west-2.elasticbeanstalk.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG1} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>Talk-a-tive</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/talk-a-tive"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://talk-a-tive.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG2} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>Expenses Tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/your_expenses_tracker"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/aayush3416/your_expenses_tracker"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG3} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>Tic-Tac-Toe Robot</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/Tic-Tac-Toe"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/aayush3416/Tic-Tac-Toe"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG4} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>My Personal Blog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/aayush-blog"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://aayush-blog.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG5} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>Musical Time Machine</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/musical-time-machine"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://devpost.com/software/musical-time-machine"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item__image">
            <img src={IMG6} alt="" className="portfolio__item-projects-image" />
          </div>
          <h3>Twitter Complaint Bot</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/aayush3416/twitter-complain-bot"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://devpost.com/software/twitter-complain-bot"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio