import { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import aboutImg from '../images/2.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderContent = () => {
    switch(activeTab) {
      case 'skills':
        return (
          <>
            <div className="text-box">
              <p>AI & Machine Learning</p>
              <span>FastAPI, LangChain, DistilBERT, Hugging Face Transformers</span>
            </div>
            <div className="text-box">
              <p>Full Stack Development</p>
              <span>React.js, Next.js, Spring Boot, REST APIs, Microservices</span>
            </div>
            <div className="text-box">
              <p>Cloud & DevOps</p>
              <span>AWS (EC2, S3), Docker, Kubernetes, Jenkins, CI/CD</span>
            </div>
            <div className="text-box">
              <p>Databases & Tools</p>
              <span>MySQL, MongoDB, Redis, JWT, RBAC, Postman, JUnit</span>
            </div>
          </>
        );
      case 'awards':
        return (
          <>
            <div className="text-box">
              <p>AI-Powered Web Apps Certification</p>
              <span>Advanced certification in AI-driven web application development</span>
            </div>
            <div className="text-box">
              <p>Java Programming (AICTE)</p>
              <span>Certified Java developer with enterprise-grade application skills</span>
            </div>
            <div className="text-box">
              <p>SQL Basics & Web Development</p>
              <span>Database management and modern web development practices</span>
            </div>
          </>
        );
      case 'education':
        return (
          <>
            <div className="text-box">
              <p>B.Tech in Electronics & Computer Engineering</p>
              <span>Gandhi Engineering College, Bhubaneswar (2020-2024) - CGPA: 8.0/10</span>
            </div>
            <div className="text-box">
              <p>Intermediate (12th Grade)</p>
              <span>SPY College, Gaya (2018-2020) - Percentage: 73%</span>
            </div>
            <div className="text-box">
              <p>AI & Full Stack Development</p>
              <span>Specialized in AI integration, LLM development, and scalable architectures</span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="" className="aboutHero" />
      </div>
      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>AI-Focused Full Stack Developer</h3>
        <p>
          I am Shubham Kumar, an AI-Focused Full Stack Developer passionate about building intelligent, 
          scalable, and user-friendly applications. With expertise in Artificial Intelligence, Backend Systems, 
          and Modern Frontend Development, I bridge the gap between AI research and real-world applications.
        </p>
        <p>
          I specialize in FastAPI, LangChain, Spring Boot, React.js, and Next.js. Experienced in deploying 
          AI-driven apps on AWS with Docker & Kubernetes. Strong understanding of database systems (SQL/NoSQL), 
          cloud platforms, and Agile methodology. Hands-on experience in LLM integration, chatbot development, 
          and enterprise-grade APIs.
        </p>
        <div className="about-btn">
          <button 
            className={activeTab === 'skills' ? 'active' : ''}
            onClick={() => setActiveTab('skills')}
          >
            Main Skills
          </button>
          <button 
            className={activeTab === 'awards' ? 'active' : ''}
            onClick={() => setActiveTab('awards')}
          >
            Certifications
          </button>
          <button 
            className={activeTab === 'education' ? 'active' : ''}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        <div className="content-btn">
          <div className="content">
            {renderContent()}
          </div>
        </div>
        <div className="cvContent">
          <a href="/images/resume.pdf" target="_blank" className="btn d-CV">
            Download CV <BsDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;