import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Jimoo Software Logo" className="navbar-logo" />
        <Link to="/">Jimoo Software</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 