import { FC } from 'react';

const About: FC = () => {
  const keyboardImage = "https://images.unsplash.com/photo-1587829741301-dc798b83add3";
  
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={keyboardImage} alt="Keyboard" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="about-content">
        <h1>About The Team</h1>
        <p>
        With roots in Canada, the US, and beyond, our globally dispersed team brings diverse expertise from finance, tech, and entertainment, and academic credentials from PhDs to bachelor's degrees. 
        Working primarily remotely, we unite under the guidance of advisors with humanitarian perspectives. 
        </p>
        <p>
        At Jimoo Software LLC, our mission is to empower businesses by delivering innovative, AI-powered software solutions that are intuitive, efficient, and tailored to meet unique needs. 
        We are committed to driving progress through technology, simplifying complexity, and creating meaningful tools that help our clients achieve their goals. 
        Together, we aim to build a smarter, more connected digital future.
        </p>
      </div>
    </div>
  );
};

export default About; 