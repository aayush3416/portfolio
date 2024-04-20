import React from 'react'
import './experience.css'
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


const Experience = () => {
  return (
    <section id="experiences">
      <h5>Get to Know</h5>
      <h2>My Work Experience</h2>

      <Swiper
        className="container experiences_container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Software Engineering Intern - Super.com
          </h3>
          <h5 className="date">Jan 2024 - Apr 2022</h5>
          <small className="company_review">
            <p>
              • Developed an onboarding feature using React & Typescript impacting 330k DAU by introducing a Cash for Tasks completion system,
                resulting in a surge in user engagement and a 30% boost in conversion rate, calculated via Amplitude
            </p>
            <p>
              • Created a API webhook using Flask and integrated a new banned users database table (PostgreSQL), to automatically exclude an
                average of 150+ banned users weekly from viewing offers, validated through rigorous Postman testing
            </p>
            <p>
              • Implemented a secure validation postback hash mechanism for a key partner, safeguarding the integrity of incoming data with over
                95% accuracy, and spearheaded the development of corresponding unit and integration tests to automate verification processes
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Machine Learning Engineering Intern - Healthcare Systems R & A
          </h3>
          <h5 className="date">May 2023 - Aug 2023</h5>
          <small className="company_review">
            <p>
              • Built a Matplotlib Heatmap feature, enhancing data visualization for 15+ geologists,
                leading to precise mineral pattern predictions
            </p>
            <p>
              • Streamlined data handling with a predictive imputation algorithm, boosting accuracy by 35%,
                reducing preprocessing time by 55%
            </p>
            <p>
              • Implemented a Gradient Descent algorithm that can calculate the
              gradient in parameter optimization, which outperforms current
              parameter search algorithms in terms of computing speeds, while
              increasing test accuracy by 37%
            </p>
            <p>
              • Improved GNN training through TensorFlow, achieving a reduction in train time
              from 2 hours to 10 minutes across 4000 epochs
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Software Engineering Intern - KI3 Photonics Technologies
          </h3>
          <h5 className="date">Sept 2022 - Dec 2022</h5>
          <small className="company_review">
            <p>
              • Developed a web app using Flask and JavaScript that can accept
              1000+ OpenQASM 2.0 strings and generate the resulting quantum
              circuit with the ability to modify the circuit while hosted,
              enhancing user accessibility by 45%.
            </p>
            <p>
              • Redesigned the company’s visualization package to include
              Matplotlib to enable circuit visualizations, circuit comparisons,
              and circuit-directed acyclic graphs, helping 6+ senior developers
              reduce debugging times by 65%.
            </p>
            <p>
              • Implemented a Gradient Descent algorithm that can calculate the
              gradient in parameter optimization, which outperforms current
              parameter search algorithms in terms of computing speeds, while
              increasing test accuracy by 37%
            </p>
            <p>
              • Performed test-driven development using A/B testing to validate
              quantum circuits, ensuring 89.2% code coverage.
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Software Engineering Intern - Accipiter Radar Technologies
          </h3>
          <h5 className="date">Jan 2022 - Apr 2022</h5>
          <small className="company_review">
            <p>
              • Created a backend HTTP server in Golang to POST 10K+requests
              daily, fetched data from Dgraph using DQL and connected Angular's
              HTTP client to display data
            </p>
            <p>
              • Performed test-driven development by writing unit tests for
              existing APIs using Python Unittest with Selenium, increasing code
              coverage by 27%
            </p>
            <p>
              • Utilized Jenkins to provide a continuous integration service in
              order to automate the entire process of loading the latest build
              code and test files, running the tests, and generating a report of
              the results once per day.
            </p>
            <p>
              • Worked in an Agile environment to decrease app failures by 65%
              by fixing over 40 bugs, improving API request times by up to 90%
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Software Developer - Waterloo Rocketry Team
          </h3>
          <h5 className="date">Feb 2022 - Present</h5>
          <small className="company_review">
            <p>
              • Worked on a Slackbot to handle team meetings, commands, and
              remainders using Node.js, Express, and AWS • Designed our Slackbot
            </p>
            <p>
              • Designed our Slackbot to use AWS Lambda Functions to listen to
              HTTP requests made by Slack and other APIs to create custom
              responses, and utilized GitHub Actions for automatic deployment to
              AWS
            </p>
            <p>
              • Created new and modified existing integration tests with Mocha
              and Chai to ensure correctly functioning code
            </p>
          </small>
        </SwiperSlide>
        <SwiperSlide className="experience">
          <h3 className="company_name">
            Vice-President Of Computer Science Club - CastleBrooke Secondary
            School
          </h3>
          <h5 className="date">Sept 2020 - Apr 2021</h5>
          <small className="company_review">
            <p>
              • Supervised and taught over 100 club members the fundamentals
              basics of Python Posted weekly lessons and tutorials, as well as
              urged participants to attempt CCC problems from the University of
              Waterloo
            </p>
            <p>
              • Provided feedback to students' code to make it more efficient
              and user-friendly
            </p>
            <p>
              • Designed various challenges and hackathons to put their
              knowledge and abilities to the test
            </p>
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Experience
