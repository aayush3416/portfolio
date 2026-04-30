import React from 'react';
import './skills.css';

const Skills = () => {
  const skillGroups = [
    {
      label: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Golang', 'HTML5', 'CSS3'],
    },
    {
      label: 'Frontend',
      skills: ['React', 'Next.js', 'Angular', 'AngularJS', 'Bootstrap'],
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'Express.js', 'Flask', 'GraphQL'],
    },
    {
      label: 'Data & Infra',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Dgraph', 'Docker', 'Kubernetes', 'Git'],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <span className="section-label reveal">Skills</span>
        <h2 className="reveal">Technologies I work with</h2>

        <div className="skills__groups reveal">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.label}>
              <h4 className="skills__group-label">{group.label}</h4>
              <div className="skills__pills">
                {group.skills.map((skill) => (
                  <span className="skills__pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;