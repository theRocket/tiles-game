import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animationDuration } from '../../models/constants';
import { drawLetter, drawLetterEnd } from '../../store/slice';

const LetterHand = () => {
  const dispatch = useDispatch();
  const canDraw = useSelector((state) => state.tiles.canDraw);
  const drawnLetter = useSelector((state) => state.tiles.drawnLetter);
  const isTransitioning = useSelector((state) => state.tiles.isTransitioning);
  const letterBeingPlayed = useSelector((state) => state.tiles.letterBeingPlayed);
  const letterHand = useSelector((state) => state.tiles.letterHand);

  const drawTile = () => {
    dispatch(drawLetter());

    setTimeout(() => {
      dispatch(drawLetterEnd());
    }, animationDuration);
  };

  return (
    <div className="flex items-center flex-col text-center justify-center pb-2.5 md:pb-0">
      <h2>Letter Hand</h2>
      <div className="w-full">
        <ul className="list-none my-4">
          {letterHand &&
            letterHand.length > 0 &&
            letterHand.map((letter, index) => {
              const isLast = index === letterHand.length - 1;
              const className =
                isTransitioning && drawnLetter === letter && isLast
                  ? 'fade-in'
                  : letterBeingPlayed && letterBeingPlayed === letter
                  ? 'fade-out'
                  : '';
              return (
                <li key={`letter-${letter}`} className={`tiles ${className}`}>
                  {letter}
                </li>
              );
            })}
        </ul>
        {letterHand.length === 0 && !isTransitioning && <p className="text-pink-200 my-4">your hand is empty</p>}
      </div>
      <button
        className={`${
          isTransitioning ? 'bg-[#f00] cursor-wait' : 'bg-[#4caf50] cursor-pointer'
        } text-white py-5 px-20 md:py-3 md:px-5 border-none rounded text-base shadow-draw-tile`}
        onClick={drawTile}
        disabled={!canDraw || isTransitioning}
      >
        Draw A Tile
      </button>
      {/* <div className='loading-wrapper'>
        <Bars height='40' width='40' color='#4fa94d' ariaLabel='bars-loading' wrapperStyle={{}} wrapperClass='' visible={state.isTransitioning} />
      </div> */}
    </div>
  );
};

export default LetterHand;
