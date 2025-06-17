import React, { useEffect, useRef, useState } from 'react';
import './experience.css';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJsSquare, 
  FaGitAlt, 
  FaDocker,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiTensorflow,
  SiKubernetes,
  SiRedis,
  SiFigma,
  SiNextdotjs,
  SiGraphql
} from 'react-icons/si';

const Experience = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const skillsRef = useRef([]);

  // Add state for expanded internships
  const [expanded, setExpanded] = useState({});
  const toggleExpand = idx => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Animate skill items
          const skillItems = entry.target.querySelectorAll('.experience__details');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (frontendRef.current) observer.observe(frontendRef.current);
    if (backendRef.current) observer.observe(backendRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const SkillLevel = ({ level }) => {
    return (
      <div className="skill-level">
        <div className="skill-dots">
          {[...Array(5)].map((_, index) => (
            <div 
              key={index} 
              className={`skill-dot ${index < level ? 'filled' : ''}`}
            />
          ))}
        </div>
      </div>
    );
  };

  const frontendSkills = [
    { name: 'React', icon: <FaReact />, level: 5, description: 'Advanced' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 4, description: 'Proficient' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 4, description: 'Proficient' },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 5, description: 'Expert' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 5, description: 'Expert' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 4, description: 'Proficient' }
  ];

  const backendSkills = [
    { name: 'Python', icon: <FaPython />, level: 5, description: 'Expert' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 4, description: 'Proficient' },
    { name: 'Express.js', icon: <SiExpress />, level: 4, description: 'Proficient' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 4, description: 'Proficient' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 3, description: 'Intermediate' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 3, description: 'Intermediate' }
  ];

  const internships = [
    {
      company: 'Abnormal AI',
      title: 'Software Engineer Intern',
      location: 'San Francisco, CA',
      date: 'May 2025 – Aug 2025',
      bullets: [
        'Working on the Premium Email Products team (specifically on the AI Security Mailbox)'
      ]
    },
    {
      company: 'Pietra',
      title: 'Backend Software Engineer Intern',
      location: 'New York City, NY',
      date: 'Sept 2024 – Dec 2024',
      bullets: [
        'Architected a web scraping system using Python\'s asyncio and aiohttp, scaling to process 100+ retailer stores daily, extracting 1M+ product data points, reducing data collection time from 25 hours to 2.',
        'Implemented a multi-tiered store categorization system using primary type matching, keyword analysis, and GPT-4, reducing the others category assignments by 70%.',
        'Built an email extraction and verification pipeline using Hunter.io and SendGrid for domains lacking contact information, resulting in a 50% increase in valid email data.',
        'Led the development of a Python automation script to simulate end-to-end warehouse order processing workflows, including order creation, picking, and packing, by integrating with RESTful and GraphQL APIs.'
      ]
    },
    {
      company: 'Super.com',
      title: 'Software Engineer Intern',
      location: 'San Francisco, CA',
      date: 'Jan 2024 – Apr 2024',
      bullets: [
        'Optimized Apache Kafka event streaming architecture with parallel processing and strategic batch sizing, reducing transaction latency by 25% while processing 100K+ daily rewards.',
        'Architected an AI-powered changelog generator using Flask and React, integrating OpenAI\'s GPT-4.0 model and GitHub API to automate changelog creation from Git commits, reducing documentation time.',
        'Engineered a secure partner integration platform for cash-for-tasks functionality, enhancing data security with an SHA-256 postback validation mechanism, utilizing Datadog for real-time monitoring/error logging.',
        'Improved user retention through A/B testing, which introduced a one-time offer of credits, saving the company a projected $47K/year.'
      ]
    },
    {
      company: 'Accipiter Radar Technologies',
      title: 'Software Engineer Intern',
      location: 'Niagara, ON',
      date: 'Jan 2022 – Apr 2022',
      bullets: [
        'Built a Golang server capable of handling 10K+ requests, leveraging GraphQL to optimize query execution and reduce response times by 40% and providing the data to 12+ clients.',
        'Spearheaded the development of an application to encrypt paystubs with password protection, saving the Accounting Department 10+ hours/month.',
        'Automated testing of 100+ web app features by developing a Jenkins CI/CD pipeline with Pytest and Selenium.',
        'Worked in an Agile environment to minimize app failures by 35% by fixing 20+ bugs using Typescript and Angular.'
      ]
    },
    {
      company: 'Healthcare Systems R & A',
      title: 'Software Engineer Intern',
      location: 'Toronto, ON',
      date: 'May 2023 – Aug 2023',
      bullets: [
        'Designed and implemented a data processing pipeline using Python, integrating a predictive imputation algorithm that improved F1 score by 35% and reduced preprocessing time by 55%.',
        'Revamped backend performance by implementing Redis caching mechanisms, reducing database query times by 65% for frequently accessed geological data.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ marginTop: 0 }}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      {/* Internships Timeline */}
      <div className="container" style={{ marginBottom: '3rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>
          Internships & Work Experience
        </h3>
        <div className="timeline">
          {internships.map((item, idx) => {
            const isExpanded = expanded[idx];
            const previewBullets = item.bullets.slice(0, 2);
            const hiddenBullets = item.bullets.slice(2);
            return (
              <div className="timeline-item" key={idx}>
                <div className="company_name">{item.company}</div>
                <div className="date">{item.location} | {item.date}</div>
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <ul style={{ marginTop: '0.5rem', color: 'var(--color-light)', textAlign: 'left', paddingLeft: '1.2em' }}>
                  {previewBullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '0.5em' }}>{bullet}</li>
                  ))}
                  {isExpanded && hiddenBullets.map((bullet, i) => (
                    <li key={i + 2} style={{ marginBottom: '0.5em' }}>{bullet}</li>
                  ))}
                </ul>
                {hiddenBullets.length > 0 && (
                  <button onClick={() => toggleExpand(idx)} style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    padding: 0,
                    fontWeight: 600,
                    marginTop: '0.5em'
                  }}>
                    {isExpanded ? 'See less' : 'See more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
