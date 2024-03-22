import { useSelector } from 'react-redux';

const Letter = ({ letter }) => {
  const drawnLetter = useSelector((state) => state.tiles.drawnLetter);
  const isTransitioning = useSelector((state) => state.tiles.isTransitioning);
  const letterCount = useSelector((state) => state.tiles.letterBag[letter]);
  const className =
    'text-black inline-flex justify-center items-center w-10 h-10 bg-[#f0f0f0] board-border rounded text-xl font-bold m-1';

  let fadeApplied = false; // Flag to check if the fade-out has been applied to that specific indexed letter in the bag
  // Check if this letter matches the drawnLetter and transitioning, and fade-out not yet applied
  if (letter === drawnLetter && isTransitioning && !fadeApplied) {
    fadeApplied = true; // Set flag to true to prevent applying fade-out again
    // Render the letter normally if it's not the drawn letter or if fade-out has already been applied
    return (
      <span className={`${className} fade-out`}>
        {letter} <span className="text-xs">({letterCount})</span>
      </span>
    );
  } else {
    return (
      <span className={className}>
        {letter} <span className="text-xs">({letterCount})</span>
      </span>
    );
  }
};

export default Letter;
