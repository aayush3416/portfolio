import React, { useState } from 'react';
import './experience.css';
import { FaLink, FaLinkedin } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Super.com",
      date: "Jan 2024 - Apr 2024",
      details: [
        "At Super.com, I developed a Cash for Tasks onboarding feature using React and Typescript, increasing user engagement and conversion rates by 30%. I optimized the rewards-engine backend with Apache Kafka, improving processing speed and achieving a 99.99% success rate. I also conducted A/B testing to enhance user retention, implemented a secure validation mechanism for partner data, and created a Flask API webhook integrated with a PostgreSQL database to exclude malicious users."
      ],
      website: "https://www.super.com/",
      linkedin: "https://www.linkedin.com/company/superdotcom/"
    },
    {
      title: "Software Engineering Intern",
      company: "Healthcare Systems R & A",
      date: "May 2023 - Apr 2023",
      details: [
        "During my internship at Healthcare Systems R & A, I built a Matplotlib heatmap feature that improved data visualization for geologists, aiding in precise mineral pattern predictions. I streamlined data handling with a predictive imputation algorithm, boosting the f1 score and reducing preprocessing time. Additionally, I optimized GNN training using TensorFlow tools, significantly reducing training time."
      ],
      website: "http://www.healthcare-systems.ca/team.html",
      linkedin: "https://www.linkedin.com/company/healthcare-systems-r-a/"
    },
    {
      title: "Software Engineering Intern",
      company: "Ki3 Photonics Technologies",
      date: "Sept 2022 - Dec 2022",
      details: [
        "At Ki3 Photonics Technologies, I architected a web app for real-time quantum circuit customization using JavaScript and Flask. I enhanced the efficiency of quantum circuits through advanced optimization techniques using Python and TensorFlow Quantum. Furthermore, I implemented automated testing and CI workflows with Jest, Mocha, and Jenkins, achieving high code coverage."
      ],
      website: "https://www.ki3photonics.com/",
      linkedin: "https://www.linkedin.com/company/ki3-photonics-technologies-inc/"
    },
    {
      title: "Software Engineering Intern",
      company: "Accipiter Radar Technologies",
      date: "Jan 2022 - Apr 2022",
      details: [
        "While interning at Accipiter Radar Technologies, I built a Golang server capable of handling high request volumes, optimized query execution with DQL, and integrated the data with Angular for client display. I also developed an application to encrypt paystubs using the PYPDF2 library, saving the Accounting Department significant time bi-weekly. Additionally, I worked in an Agile environment to fix numerous bugs, reducing application failures using Typescript and Angular."
      ],
      website: "https://www.accipiterradar.com/",
      linkedin: "https://www.linkedin.com/company/accipiter-radar/"
    },
    {
      title: "Software Engineering Intern",
      company: "Waterloo Rocketry Team",
      date: "Jan 2022 - Present",
      details: [
        "I developed a Slackbot to handle team meetings, commands, and reminders using Node.js, Express, and AWS. I designed the Slackbot to utilize AWS Lambda Functions for listening to HTTP requests from Slack and other APIs to create custom responses, and used GitHub Actions for automatic deployment to AWS. Additionally, I created and modified integration tests with Mocha and Chai to ensure the code functioned correctly."
      ],
      website: "https://www.waterloorocketry.com/",
      linkedin: "https://www.linkedin.com/company/waterloo-rocketry/"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleShowDetails = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="experiences">
      <h5>Get to Know</h5>
      <h2>My Work Experience</h2>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <h3 className="company_name">{`${experience.title} - ${experience.company}`}</h3>
            <h5 className="date">{experience.date}</h5>
            {activeIndex === index && (
              <small className="company_review">
                {experience.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </small>
            )}
            <div className="experience-actions">
              <button className="btn show-details" onClick={() => handleShowDetails(index)}>
                {activeIndex === index ? 'Hide Details' : 'Show Details'}
              </button>
              <a href={experience.website} className="link-btn" target="_blank" rel="noopener noreferrer">
                <FaLink />
              </a>
              <a href={experience.linkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
