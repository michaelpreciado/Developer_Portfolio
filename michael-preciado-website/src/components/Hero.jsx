import React from 'react';

function Hero() {
  return (
    <section id="hero">
      <img 
        src="/images/mp.jpeg" 
        alt="Profile" 
        className="profile-image"
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
        <span 
          aria-hidden="true" 
          style={{ 
            fontSize: '2rem', // Adjust size as needed
            fontFamily: "'Courier New', Courier, monospace", // Use a specific monospace font
            marginRight: '10px', 
            color: 'white', // Change color to white
            textShadow: '0 0 5px blue, 0 0 10px blue' // Change glow effect to blue
          }}
        >
          &lt;/&gt; 
        </span>
        <h1>Michael Preciado</h1>
      </div>
      <p className="hero-subtitle">Software & AI Solutions</p>
      {/* Skills buttons will be in the Skills component */}
    </section>
  );
}

export default Hero; 