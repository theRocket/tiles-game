import { useContext } from 'react';
import { GameBoardContext } from '../gameboard/context-config';
import Letter from '../letter/Letter';

const LetterBag = () => {
  const { state } = useContext(GameBoardContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Letter Bag</h2>{' '}
      {Object.entries(state.letterBag || {}).map((letterTuple) => (
        <Letter
          key={letterTuple[0].charCodeAt(0)} // convert to unique int
          letter={letterTuple[0]}
          letterCount={letterTuple[1]}
          drawnLetter={state.drawnLetter}
          isTransitioning={state.isTransitioning}
        />
      ))}
      <div>
        <h4 style={{ marginBottom: '20px' }}>
          Use the button in your Letter Hand to draw a letter tile.
          <br />
          Collect enough letters to form a{' '}
          <a
            href="https://wordfinder.yourdictionary.com/blog/bananagrams-dictionary-find-the-right-and-valid-words/"
            target="_blank"
            rel="noopener noreferrer"
          >
            valid word
          </a>
          .<br />
          To use your hand, click or tap on an empty square in the Game Board and begin typing from your available
          letters.
          <br />
          You can click/tap twice to place letters downwards.
        </h4>
      </div>
    </div>
  );
};

export default LetterBag;
