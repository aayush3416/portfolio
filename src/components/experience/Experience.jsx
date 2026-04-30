import React, { useState } from 'react';
import './experience.css';
import { FiChevronDown, FiChevronUp, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (idx) => setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const internships = [
    {
      company: 'Abnormal AI',
      title: 'Software Engineer Intern',
      location: 'San Francisco, CA',
      date: 'May 2025 — Aug 2025',
      bullets: [
        'Designed a large-scale data ingestion pipeline in Python and Elasticsearch for user-reported phishing emails, processing 700K+ reports per year with automated triage and fallback routing logic.',
        'Spearheaded development of an incident-response AI Agent using an MCP-based orchestration layer to automate on-call routing, Slack channel creation, Zoom setup, and incident communication; architecture mirrors ML workflow automation patterns used in AI tooling systems, reducing manual operational load by 95%.',
        'Implemented end-to-end notification linkage between re-review requests and analyst decisions using Python, TypeScript, SendGrid API, and Redis-backed Celery brokers, achieving 99.5% successful delivery across distributed task queues.',
      ],
    },
    {
      company: 'Pietra',
      title: 'Backend Software Engineer Intern',
      location: 'New York City, NY',
      date: 'Sep 2024 — Dec 2024',
      bullets: [
        'Architected a distributed data processing pipeline using Python asyncio and aiohttp with parallel worker queues, scaling to process 1K+ retailer stores daily and extract 1M+ product data points — reducing ingestion time from 25 hours to 2 hours.',
        'Designed a multi-tiered ML-assisted categorization system combining primary type matching, keyword analysis, and GPT-4 with semantic scoring and lightweight ranking heuristics, reducing miscategorization by 70%.',
        'Led development of a Python automation script to simulate end-to-end warehouse order processing workflows, integrating RESTful and GraphQL APIs to validate multi-stage pipeline behavior.',
        'Built an email extraction pipeline using Hunter.io and SendGrid, increasing valid email data coverage by 50%.',
      ],
    },
    {
      company: 'Super.com',
      title: 'Software Engineer Intern',
      location: 'San Francisco, CA',
      date: 'Jan 2024 — Apr 2024',
      bullets: [
        'Architected an AI-powered changelog generator using Flask and React, integrating OpenAI GPT-4 and the GitHub API to automate changelog creation from Git commits — a full-stack ML tooling system.',
        'Optimized Apache Kafka event streaming for rewards payout events by tuning parallel consumers and batch sizes, reducing end-to-end transaction latency by 25% across 100K+ daily reward settlements.',
        'Improved user retention through A/B testing by introducing a one-time credit offer, saving the company $100K per year.',
        'Engineered a secure partner integration platform with SHA-256 postback validation and real-time Datadog monitoring and error logging.',
      ],
    },
    {
      company: 'Healthcare Systems R&A',
      title: 'Software Engineer Intern',
      location: 'Toronto, ON',
      date: 'May 2023 — Aug 2023',
      bullets: [
        'Developed an ML data preprocessing pipeline with predictive imputation strategies, improving downstream model F1 score by 35% and reducing preprocessing overhead by 55%.',
        'Revamped backend performance with Redis caching, reducing database query load by 65% for frequently accessed model feature data.',
      ],
    },
    {
      company: 'Accipiter Radar Technologies',
      title: 'Software Engineer Intern',
      location: 'Niagara, ON',
      date: 'Jan 2022 — Apr 2022',
      bullets: [
        'Built a high-throughput Golang server handling 10K+ requests, using GraphQL to optimize queries and reduce response times by 40% across 12+ clients.',
        'Led development of an application to encrypt paystubs with password protection, saving the Accounting team 10+ hours per month.',
        'Automated testing of 100+ web application features by building a Jenkins CI/CD pipeline with Pytest and Selenium, ensuring production stability.',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <span className="section-label reveal">Experience</span>
        <h2 className="reveal">Where I've worked</h2>

        <div className="experience__list reveal">
          {internships.map((item, idx) => {
            const isExpanded = expanded[idx];
            const previewBullets = item.bullets.slice(0, 1);
            const hiddenBullets = item.bullets.slice(1);

            return (
              <div className="experience__item" key={idx}>
                <div className="experience__item-header">
                  <div className="experience__item-main">
                    <h3 className="experience__company">{item.company}</h3>
                    <span className="experience__role">{item.title}</span>
                  </div>
                  <div className="experience__item-meta">
                    <span className="experience__location">
                      <FiMapPin size={13} />
                      {item.location}
                    </span>
                    <span className="experience__date">{item.date}</span>
                  </div>
                </div>

                <ul className="experience__bullets">
                  {previewBullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                  {isExpanded &&
                    hiddenBullets.map((bullet, i) => (
                      <li key={i + 1}>{bullet}</li>
                    ))}
                </ul>

                {hiddenBullets.length > 0 && (
                  <button
                    className="experience__toggle"
                    onClick={() => toggleExpand(idx)}
                  >
                    {isExpanded ? (
                      <>Show less <FiChevronUp size={14} /></>
                    ) : (
                      <>Show more <FiChevronDown size={14} /></>
                    )}
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
