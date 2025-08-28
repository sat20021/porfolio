import { useState } from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      category: 'ai',
      title: 'AI Chatbot with LLM & Contextual Memory',
      description: 'Production-grade AI chatbot with 92% user satisfaction. Built with FastAPI, LangChain, DistilBERT, Redis, JWT, AWS, React.js, and Docker. Features multi-turn conversations and secure RBAC.',
      image: img1,
      tech: 'FastAPI, LangChain, DistilBERT, Redis, JWT, AWS, React.js, Docker',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Features real-time inventory management and responsive design.',
      image: img2,
      tech: 'React.js, Node.js, MongoDB, Stripe, Redux',
      link: '#',
      github: '#'
    },
    {
      category: 'mobile',
      title: 'Cross-Platform Mobile App',
      description: 'React Native mobile application with offline capabilities, push notifications, and native device features. Optimized for both iOS and Android platforms.',
      image: img3,
      tech: 'React Native, Firebase, Redux, AsyncStorage',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'Bookstore Management System',
      description: 'Enterprise-grade application with CRUD APIs for book inventory & user management. Built with Java, Spring Boot, MySQL, and JSP. Features secure authentication and responsive UI.',
      image: img4,
      tech: 'Java, Spring Boot, MySQL, JSP',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'Weather Forecasting Application',
      description: 'Real-time weather app with REST API integration using Node.js and OpenWeatherMap API. Features dynamic frontend updates and optimized API calls for faster forecast results.',
      image: img5,
      tech: 'Node.js, JavaScript, OpenWeatherMap API',
      link: '#',
      github: '#'
    },
    {
      category: 'ai',
      title: 'LLM Integration & Prompt Engineering',
      description: 'Advanced AI integration with LangChain for conversational AI with contextual memory. Fine-tuned DistilBERT for multi-intent chatbot detection achieving 88% accuracy.',
      image: img6,
      tech: 'LangChain, DistilBERT, Redis, FastAPI',
      link: '#',
      github: '#'
    },
    {
      category: 'devops',
      title: 'CI/CD Pipeline with Jenkins',
      description: 'Automated build and deployment pipelines for AI applications on AWS EC2 with Docker. Ensures scalability and reliability for production deployments.',
      image: img1,
      tech: 'Jenkins, Docker, AWS EC2, CI/CD',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'Enterprise REST APIs',
      description: 'Secure and efficient backend systems with JWT authentication and RBAC. Built microservices architecture for scalable enterprise applications.',
      image: img2,
      tech: 'Spring Boot, JWT, RBAC, Microservices',
      link: '#',
      github: '#'
    },
    {
      category: 'ai',
      title: 'Computer Vision Project',
      description: 'Real-time object detection and image classification system using TensorFlow and OpenCV. Achieved 95% accuracy in object recognition tasks.',
      image: img3,
      tech: 'TensorFlow, OpenCV, Python, Flask',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization. Features multi-platform integration and custom reporting.',
      image: img4,
      tech: 'React.js, D3.js, Node.js, PostgreSQL',
      link: '#',
      github: '#'
    },
    {
      category: 'mobile',
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness tracking application with workout plans, progress monitoring, and social features. Includes GPS tracking and health data integration.',
      image: img5,
      tech: 'React Native, HealthKit, Google Fit, Firebase',
      link: '#',
      github: '#'
    },
    {
      category: 'devops',
      title: 'Kubernetes Cluster Management',
      description: 'Multi-node Kubernetes cluster setup with monitoring, logging, and auto-scaling capabilities. Implemented using Terraform and Helm charts.',
      image: img6,
      tech: 'Kubernetes, Terraform, Helm, Prometheus',
      link: '#',
      github: '#'
    },
    {
      category: 'ai',
      title: 'Natural Language Processing API',
      description: 'NLP service for text analysis, sentiment analysis, and language translation. Built with transformer models and optimized for production use.',
      image: img1,
      tech: 'Transformers, FastAPI, Redis, Docker',
      link: '#',
      github: '#'
    },
    {
      category: 'web',
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with real-time messaging, file sharing, and group chat functionality. Features end-to-end encryption.',
      image: img2,
      tech: 'Socket.io, React.js, Node.js, MongoDB',
      link: '#',
      github: '#'
    }
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">My Portfolio</h2>
        <span>Full-Stack Development & AI Projects</span>
      </div>
      <div className="fillter-buttons">
        <button 
          className={`button ${activeFilter === 'all' ? 'mixitup-control-active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`button ${activeFilter === 'ai' ? 'mixitup-control-active' : ''}`}
          onClick={() => handleFilter('ai')}
        >
          AI & ML
        </button>
        <button 
          className={`button ${activeFilter === 'web' ? 'mixitup-control-active' : ''}`}
          onClick={() => handleFilter('web')}
        >
          Web Development
        </button>
        <button 
          className={`button ${activeFilter === 'mobile' ? 'mixitup-control-active' : ''}`}
          onClick={() => handleFilter('mobile')}
        >
          Mobile Apps
        </button>
        <button 
          className={`button ${activeFilter === 'devops' ? 'mixitup-control-active' : ''}`}
          onClick={() => handleFilter('devops')}
        >
          DevOps
        </button>
      </div>

      <div className="portfolio-gallery">
        {portfolioItems.map((item, index) => (
          <div 
            className={`portfolio-box mix ${item.category}`} 
            key={index}
            style={{ display: activeFilter === 'all' || activeFilter === item.category ? 'flex' : 'none' }}
          >
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tech-stack">
                <strong>Tech Stack:</strong> {item.tech}
              </div>
              <div className="portfolio-links">
                <a href={item.link} className="readMore">Live Demo</a>
                <a href={item.github} className="readMore github-link">GitHub</a>
              </div>
            </div>
            <div className="portfolio-img">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;