import React from 'react';
import { ArrowRight } from 'lucide-react';
import './portfolio.css';

const projectsData = [
  {
    id: 'storefront-ecommerce',
    title: 'StoreFront Ecommerce',
    description:
      'A full-stack e-commerce platform with product listings, cart management, user authentication, and payment integration. Deployed on AWS.',
    href: 'https://github.com/aayush3416/storefront-ecommerce',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 'talk-a-tive',
    title: 'Talk-a-tive',
    description:
      'A real-time chat application featuring group chats, one-on-one messaging, typing indicators, and user search.',
    href: 'https://github.com/aayush3416/talk-a-tive',
    image:
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['React', 'Socket.io', 'MongoDB'],
  },
  {
    id: 'expenses-tracker',
    title: 'Expenses Tracker',
    description:
      'A personal finance tracker with interactive charts, category breakdowns, and transaction history.',
    href: 'https://github.com/aayush3416/your_expenses_tracker',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['JavaScript', 'Charts', 'CSS'],
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Robot',
    description:
      'An AI-powered Tic-Tac-Toe game with an unbeatable robot opponent using the minimax algorithm.',
    href: 'https://github.com/aayush3416/Tic-Tac-Toe',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['Python', 'AI', 'Minimax'],
  },
  {
    id: 'personal-blog',
    title: 'Personal Blog',
    description:
      'A full-featured blog platform with rich text editing, user comments, tagging, and a responsive reading experience.',
    href: 'https://github.com/aayush3416/aayush-blog',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['React', 'Express', 'PostgreSQL'],
  },
  {
    id: 'musical-time-machine',
    title: 'Musical Time Machine',
    description:
      'Travel back in time through music! Enter any date and get a Spotify playlist of the top hits from that era.',
    href: 'https://github.com/aayush3416/musical-time-machine',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080',
    tags: ['Python', 'Spotify API'],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio__header reveal">
          <span className="section-label">Projects</span>
          <h2>Things I've built</h2>
        </div>

        <div className="portfolio__grid reveal">
          {projectsData.map((project) => (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__card"
              key={project.id}
            >
              <div className="portfolio__card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio__card-overlay">
                  <span className="portfolio__card-view">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="portfolio__card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags && (
                  <div className="portfolio__card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio__tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
