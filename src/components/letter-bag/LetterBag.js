import { createInitialLetterBag } from '../../utils';
import Letter from '../letter/Letter';

const LetterBag = () => {
  const letterBag = createInitialLetterBag();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold my-5">Letter Bag</h2>{' '}
      {Object.entries(letterBag || {}).map(([letter, count]) => (
        <Letter key={`letter-${letter}`} letter={letter[0]} />
      ))}
      <div>
        <h4 className="text-base font-bold leading-normal mt-5 mb-4">
          Use the button in your Letter Hand to draw a letter tile.
          <br />
          Collect enough letters to form a{' '}
          <a
            className="text-pink-400 underline"
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
