import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
