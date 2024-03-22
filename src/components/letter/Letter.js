import { useSelector } from 'react-redux';

const Letter = ({ letter }) => {
  const drawnLetter = useSelector((state) => state.tiles.drawnLetter);
  const isTransitioning = useSelector((state) => state.tiles.isTransitioning);
  const letterCount = useSelector((state) => state.tiles.letterBag[letter]);

  let fadeApplied = false; // Flag to check if the fade-out has been applied to that specific indexed letter in the bag
  // Check if this letter matches the drawnLetter and transitioning, and fade-out not yet applied
  if (letter === drawnLetter && isTransitioning && !fadeApplied) {
    fadeApplied = true; // Set flag to true to prevent applying fade-out again
    // Render the letter normally if it's not the drawn letter or if fade-out has already been applied
    return (
      <span className="tiles fade-out">
        {letter} <sup>({letterCount})</sup>
      </span>
    );
  } else {
    return (
      <span className="tiles">
        {letter} <sup>({letterCount})</sup>
      </span>
    );
  }
};

export default Letter;
