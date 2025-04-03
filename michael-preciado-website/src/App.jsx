import React from 'react';
import MatrixRainBackground from './components/MatrixRainBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ScrollRevealTerminal from './components/ScrollRevealTerminal';
// Removed './App.css' import as global styles are in index.css

function App() {
  return (
    <>
      <MatrixRainBackground />
      <main style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above background */}
        <Hero />
        <ScrollRevealTerminal>
          <Skills />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Connect />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Projects />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <About />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Contact />
        </ScrollRevealTerminal>
      </main>
      <footer className="site-footer">
        Created by MP
      </footer>
    </>
  );
}

export default App;
