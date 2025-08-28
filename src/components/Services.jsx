import { BsLayers, BsCode, BsDisplay, BsGift } from "react-icons/bs";
import supportImg from '../images/3.jpg';
import appDevIcon from '../icons/app-development1.png';
import codingIcon from '../icons/coding1.png';
import designIcon from '../icons/design1.png';
import socialMediaIcon from '../icons/social-media1.png';

const Services = () => {
  const services = [
    {
      icon: appDevIcon,
      title: "AI & Machine Learning",
      description: "Development of intelligent applications using FastAPI, LangChain, and LLM integration. Custom chatbot solutions with contextual memory and prompt engineering."
    },
    {
      icon: codingIcon,
      title: "Full Stack Development",
      description: "End-to-end web applications using React.js, Next.js, Spring Boot, and modern technologies. RESTful APIs, microservices, and database integration."
    },
    {
      icon: designIcon,
      title: "Cloud & DevOps",
      description: "AWS deployment, Docker containerization, Kubernetes orchestration, and CI/CD pipeline automation. Scalable cloud infrastructure solutions."
    },
    {
      icon: socialMediaIcon,
      title: "Enterprise Solutions",
      description: "Secure enterprise-grade applications with JWT authentication, RBAC, and database management. Performance optimization and scalable architectures."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>AI-Focused Full Stack Solutions</span>
      </div>

      <div className="allServices">
        {services.map((service, index) => (
          <div className="servicesItem" key={index}>
            <div className="icon-services">
              <img src={service.icon} alt={service.title} />
              <span></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="readMore">Learn More</a>
          </div>
        ))}
      </div>

      <div className="proposal">
        <div className="text-box">
          <span>Let's Connect</span>
          <h3>Ready to Build Intelligent Solutions?</h3>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
        <img src={supportImg} className="first" alt="Support" />
      </div>
    </section>
  );
};

export default Services;