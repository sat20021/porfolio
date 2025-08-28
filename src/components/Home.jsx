import { 
  BsArrowRight, 
  BsDownload,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsFacebook
} from "react-icons/bs";
import heroImg from '../images/hero.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="hero-info">
        <h3>Welcome To My World</h3>
        <h1>Hi I'm Shubham Kumar</h1>
        <div className="text-animate">
          <h2>AI-Focused Full Stack Developer</h2>
        </div>
        <p>
          I'm an AI Engineer passionate about building intelligent, scalable, and user-friendly applications. 
          Specializing in FastAPI, LangChain, Spring Boot, React.js, and Next.js. Currently working at Mobiloitte.
        </p>
        <div className="btn-box">
          <a href="mailto:satyamraj24988@gmail.com" className="btn">
            Hire Me Now! <BsArrowRight />
          </a>
          <a href="img/resume.pdf" target="_blank" className="btn d-CV">
            Download CV <BsDownload />
          </a>
        </div>
        <div className="social-media">
          <div className="bg-icon">
            <a href="#"><BsInstagram /></a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#"><BsGithub /></a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#"><BsTwitter /></a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#"><BsFacebook /></a>
            <span></span>
          </div>
        </div>
      </div>
      
      <div className="img-hero">
        {/* Animated Rings */}
        <div className="ring-container">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
          <div className="ring ring-4"></div>
          <div className="ring ring-5"></div>
          <div className="ring ring-6"></div>
        </div>
        
        {/* Animated Dots */}
        <div className="dots-container">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
          <div className="dot dot-8"></div>
        </div>
        
        {/* Particle Effects */}
        <div className="particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="glow-orbs">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glow-orb orb-3"></div>
        </div>
        
        <img src={heroImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;