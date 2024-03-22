import React from 'react';
import './App.css';
import GameBoard from './components/gameboard';

// App is the top-level component that renders the entire GameBoard
function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1 className="text-3xl font-bold my-5">Bananarama Grams</h1>
      <h2 className="text-2xl font-bold my-5">
        fork of a design by&nbsp;
        <a
          className="text-pink-400 underline"
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
