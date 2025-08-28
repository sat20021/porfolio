import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/App.css'; 
import './assets/css/index.css';


function App() {
  return (
    <Router>
      <div className="overlay"></div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;