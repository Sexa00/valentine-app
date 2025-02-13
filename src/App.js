import React, { useState } from 'react';
import './App.css';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div className="yes-pressed-content">
          <img 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            alt="Celebrating"
            className="celebration-gif"
          />
          <div className="celebration-text">
            Okyy Yayyyyy :3
            

          </div>
        </div>
      ) : (
        <div className="valentine-content">
          <div className="hearts-background">
            {[...Array(20)].map((_, i) => (
              <span 
                key={i} 
                className="floating-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                ❤️
              </span>
            ))}
          </div>
          
          <img
            className="love-gif"
            src="https://media.tenor.com/ZhNxfL0GmoMAAAAm/mocha-bear-hearts.webp"
            alt="Cute love gif"
          />
          
          <h1 className="valentine-question">
            Will you be my Pookie Valentine?
          </h1>
          
          <div className="button-container">
            <button
              className="yes-button"
              style={{ fontSize: `${yesButtonSize}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              className="no-button"
              onClick={handleNoClick}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;