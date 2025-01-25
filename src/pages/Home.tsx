import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  const officeImage = "https://images.unsplash.com/photo-1497366216548-37526070297c";
  
  return (
    <div>
      <section 
        className="hero-section"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${officeImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-text">Empowering Businesses with AI-Driven Software Solutions</h1>
          <p className="hero-subtext">At Jimoo Software LLC, we deliver innovative, intuitive, and efficient tools to transform your ideas into reality.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <h2>Who We Are</h2>
        <p>
          Jimoo Software LLC was founded with a vision to empower businesses through cutting-edge 
          AI-powered software solutions. We specialize in creating mobile applications that are 
          intuitive, efficient, and tailored to meet the unique needs of our clients.
        </p>
        <blockquote>
          "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."
        </blockquote>
      </section>

      <section className="services-preview">
        <h2>Our Expertise</h2>
        <p>From mobile app development to AI-driven business tools, our solutions are designed to help businesses thrive in a fast-evolving digital landscape.</p>
        <div className="services-grid">
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>Custom, intuitive apps built for iOS, Android, and cross-platform experiences.</p>
            <img 
              src={require('../service-image1.png')} 
              alt="Mobile App Development" 
              style={{ maxWidth: '80%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
          <div className="service-card">
            <h3>AI-Powered Solutions</h3>
            <p>Smart tools that optimize workflows and empower decision-making.</p>
            <img 
              src={require('../service-image2.png')} 
              alt="AI-Powered Solutions" 
              style={{ maxWidth: '80%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
          <div className="service-card">
            <h3>Tailored Software Services</h3>
            <p>Custom software solutions designed to meet the unique needs of your business.</p>
            <img 
              src={require('../service-image3.png')} 
              alt="Tailored Software Services" 
              style={{ maxWidth: '80%', height: 'auto', maxHeight: '300px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home; 