import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" style={{marginRight: "15rem"}}>
          <h3>
            <img 
              src={require('../logo.png')} 
              alt="Jimoo Software Logo" 
              style={{height: '24px', marginRight: '8px', verticalAlign: 'middle'}}
            />
            Jimoo Software
          </h3>
          <p>Jimoo Software LLC was founded to empower businesses with innovative, AI-powered software solutions.</p>
        </div>
        <div className="footer-section" style={{marginRight: "5rem"}}>
          <h3>Location</h3>
          <p>142 Yellow Pine</p>
          <p>Irvine, CA 92618</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>jimoosoftware@gmail.com</p>
          <p>(508) 723-5805</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 