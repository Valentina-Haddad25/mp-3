import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-left">
                    <h1 className="nav-name">Valentina Haddad</h1>
                    <p className="navsubheader">My Virtual Resume!</p>
                </div>
                <div className="nav-right">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/employment">Employment</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/certifications">Certifications & Research</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
