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
          <h3 className="company_name">Software Engineering Intern - Accipiter Radar Technologies</h3>
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
          <h3 className="company_name">Software Developer - Waterloo Rocketry Team</h3>
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
            Vice-President Of Computer Science Club - CastleBrooke Secondary School
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
              • Designed various challenges and hackathons to put their knowledge
              and abilities to the test
            </p>
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Experience