import { useContext, useEffect, useState } from 'react';
import { drawRandomLetter, reduceOneLetter } from '../../utils';
import { GameBoardContext } from '../gameboard/context-config';

const useLetterHandStore = () => {
  const { state, setIsTransitioning, updateLetterHand, updateLetterBag, updateDrawnLetter } =
    useContext(GameBoardContext);
  const [isLetterBeingPlayed, setIsLetterBeingPLayed] = useState(false);
  const [foundIndex, setFoundIndex] = useState(0);

  useEffect(() => {
    determineCurrentPLayedHand();
  }, [state.playedLetter]);

  const determineCurrentPLayedHand = () => {
    const fi = -state.letterHand.findIndex((letter) => state.playedLetter === letter);
    setFoundIndex(fi);
    const result = fi !== -1 && state.isTransitioning;
    setIsLetterBeingPLayed(result);
  };

  // Handler function to draw a letter and update states
  const handleDrawLetter = () => {
    //letter gets the result of performing drawRandomLetter to the current state of LetterBag which returns a single randomly selected letter
    const letter = drawRandomLetter(state.letterBag);
    if (letter) {
      // Set the randomly drawn letter and start the transition
      // setDrawnLetter(letter)
      updateDrawnLetter(letter);
      setIsTransitioning(true);

      // After 1 second (once the fade-out animation completes)...
      setTimeout(() => {
        // Add the drawn letter to the hand
        updateLetterHand([...state.letterHand, letter]);
        // Reduce the number of letters in the bag.
        updateLetterBag(reduceOneLetter(state.letterBag, letter));

        // End the transition and reset the drawn letter state
        setIsTransitioning(false);
        updateDrawnLetter('');
        //  setDrawnLetter(null)
      }, 2000); // Duration should match the CSS fade-out animation
    }
  };

  return {
    handleDrawLetter,
    state,
    isLetterBeingPlayed,
    foundIndex
  };
};

export default useLetterHandStore;
