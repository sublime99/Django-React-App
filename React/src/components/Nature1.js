import React from 'react';
import './NatureSummary.css';

function Nature1() {
  return (
    <div className="summary-container">
      <h1>Sea Waves</h1>
      <img 
        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Nature 1" 
        className="summary-img"
      />
      <p>The image captures the breathtaking beauty of seawaves crashing against the shore. The vast expanse of the ocean is a mesmerizing sight, with the waves rhythmically rolling in and out, creating a serene and tranquil environment. The blue hues of the water contrast beautifully with the white foam of the waves, evoking a sense of peace and relaxation.</p>
    </div>
  );
}

export default Nature1;
