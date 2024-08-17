// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add a new CSS file for Header styles

function Header() {
  return (
    <header className="App-header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





// function Header() {
//   return (
//     <header className="App-header">
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//       <h1>Welcome to My Website</h1>
//     </header>
//   );
// }

// export default Header;
