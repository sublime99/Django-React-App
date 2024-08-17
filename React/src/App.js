import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nature1 from './components/Nature1';
import Nature2 from './components/Nature2';
import Nature3 from './components/Nature3';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nature1" element={<Nature1 />} />
          <Route path="/nature2" element={<Nature2 />} />
          <Route path="/nature3" element={<Nature3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






