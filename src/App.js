import React from 'react';
import './App.css';
import GameBoard from './components/gameboard';

// App is the top-level component that renders the entire GameBoard
function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Bananarama Grams</h1>
      <h2>
        fork of a design by&nbsp;
        <a
          href="https://github.com/MERN-ing-the-midnight-oil/tiles-game/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rhys Smoker
        </a>
      </h2>
      <GameBoard size={10} /> {/* Rendering GameBoard */}
    </div>
  );
}

export default App;
