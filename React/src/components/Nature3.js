import React from 'react';
import './NatureSummary.css';

function Nature3() {
  return (
    <div className="summary-container">
      <h1>Forest</h1>
      <img 
        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Nature 3" 
        className="summary-img"
      />
      <p>The image depicts a majestic tree with large, whitish roots sprawling across the ground. Sunlight filters through the leaves, casting dappled shadows on the forest floor. The enormous tree, with its intricate root system and towering presence, symbolizes strength and resilience. The play of light and shadow creates a magical ambiance, highlighting the natural beauty and tranquility of the forest.</p>
    </div>
  );
}

export default Nature3;
