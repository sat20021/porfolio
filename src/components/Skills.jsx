import { useEffect, useState } from 'react';

const Skills = () => {
  const [countersPlayed, setCountersPlayed] = useState(false);
  const skills = [
    { name: 'Python & AI/ML', percentage: 92 },
    { name: 'React.js & Next.js', percentage: 88 },
    { name: 'Spring Boot & Java', percentage: 85 },
    { name: 'FastAPI & LangChain', percentage: 90 },
    { name: 'AWS & DevOps', percentage: 82 },
    { name: 'Database Systems', percentage: 87 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills');
      if (!skillsSection || countersPlayed) return;

      const rect = skillsSection.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setCountersPlayed(true);
        setTimeout(() => animateCounters(), 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(() => handleScroll(), 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [countersPlayed]);

  const animateCounters = () => {
    skills.forEach((skill, index) => {
      const counter = document.querySelectorAll('.counter span')[index];
      if (!counter) {
        console.log(`Counter not found for index ${index}, skill: ${skill.name}`);
        return;
      }

      const target = skill.percentage;
      const duration = 2000;
      const increment = target / (duration / 16);

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }
        counter.textContent = Math.floor(current);
      }, 16);
    });
  };

  const calculateStrokeDashoffset = (percentage) => {
    const circumference = 2 * Math.PI * 54; // r = 54
    return circumference - (circumference * percentage) / 100;
  };

  return (
    <div className="skills">
      <div className="container">
        <div className="skillBox">
          <div className="main-text">
            <h2 className="heading">My Skills</h2>
            <span>AI-Focused Full Stack Development</span>
          </div>
          <div className="skill-wrap">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-item">
                  <div className="circular-progress">
                    <div className="circular-progress-inner">
                      <div className="circular-progress-circle">
                        <svg className="circular-progress-svg" viewBox="0 0 120 120">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ffffff" />
                              <stop offset="50%" stopColor="#f0f0f0" />
                              <stop offset="100%" stopColor="#e0e0e0" />
                            </linearGradient>
                            <filter id={`glow-${index}`}>
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          <circle
                            className="circular-progress-bg"
                            cx="60"
                            cy="60"
                            r="54"
                            strokeWidth="6"
                            fill="transparent"
                          />
                          <circle
                            className="circular-progress-fill"
                            cx="60"
                            cy="60"
                            r="54"
                            strokeWidth="6"
                            fill="transparent"
                            stroke={`url(#gradient-${index})`}
                            strokeDasharray={`${2 * Math.PI * 54}`}
                            strokeDashoffset={`${2 * Math.PI * 54}`}
                            style={{
                              strokeDashoffset: calculateStrokeDashoffset(skill.percentage),
                              transition: 'stroke-dashoffset 2s ease-in-out',
                              transitionDelay: `${index * 0.1}s`,
                              filter: `url(#glow-${index})`
                            }}
                          />
                        </svg>
                        <div className="circular-progress-text">
                          <span className="counter">
                            <span data-target={skill.percentage}>0</span>%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;