import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <h1 className='heading'>Zahid's Garment</h1>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <a href="#" className="btn">Login</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
