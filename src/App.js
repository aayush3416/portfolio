import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';

function App() {
  const [showPrank, setShowPrank] = useState(true);
  const [showJoke, setShowJoke] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (hasVisited) {
      // Skip prank for returning visitors
      setShowPrank(false);
      setShowWebsite(true);
      return;
    }

    // Show the prank sequence for first-time visitors
    const timer1 = setTimeout(() => {
      setShowJoke(true);
    }, 3000); // Show "jkjkj" after 3 seconds

    const timer2 = setTimeout(() => {
      setShowPrank(false);
    }, 5000); // Start hiding prank after 5 seconds

    const timer3 = setTimeout(() => {
      setShowWebsite(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }, 5500); // Show real website after 5.5 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (showPrank) {
    return (
      <div className="prank-container">
        <div className="error-404">
          <div className="error-content">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
              Sorry, the page you are looking for might have been removed, 
              had its name changed, or is temporarily unavailable.
            </p>
            <div className="error-details">
              <p><strong>Error Code:</strong> ERR_INVALID_WEBSITE</p>
              <p><strong>Reason:</strong> Inaccurate website detected</p>
            </div>
            
            {showJoke && (
              <div className="joke-reveal">
                <h3 className="joke-text">jkjkj 😂</h3>
                <p className="joke-subtitle">Just kidding! Loading the real website...</p>
                <div className="loading-spinner"></div>
              </div>
            )}
          </div>
          
          <div className="error-animation">
            <div className="glitch-text">INACCURATE</div>
            <div className="floating-errors">
              <span>⚠️</span>
              <span>❌</span>
              <span>🚫</span>
              <span>⛔</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`App ${showWebsite ? 'website-enter' : ''}`}>
      <Nav />
    </div>
  );
}

export default App; 