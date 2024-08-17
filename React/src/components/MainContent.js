// src/components/MainContent.js
import React from 'react';

// const MainContent = () => (
//   <main>
//     <p>Welcome to my website!</p>
//   </main>
// );

// export default MainContent;

function MainContent() {
  return (
    <main className="App-main">
      <section id="home">
        <h2>Home</h2>
        <p>This is the home section. Add some content here.</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>This is the about section. Add some information about yourself or your website.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>This is the contact section. Provide some contact information here.</p>
      </section>
    </main>
  );
}

export default MainContent;
