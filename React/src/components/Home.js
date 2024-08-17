import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <p>Welcome to the home page.</p>
      <div className="card-container">
        <div className="card">
          <Link to="/nature1">
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nature 1" 
              className="card-img" 
            />
          </Link>
          <h2>Sea Waves</h2>
        </div>
        <div className="card">
          <Link to="/nature2">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nature 2" 
              className="card-img" 
            />
          </Link>
          <h2>Water Fall</h2>
        </div>
        <div className="card">
          <Link to="/nature3">
            <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Nature 3" 
              className="card-img" 
            />
          </Link>
          <h2>Forest</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
