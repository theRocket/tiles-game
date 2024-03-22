import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { animationDuration } from '../../models/constants';
import { drawLetter, drawLetterEnd } from '../../store/slice';

const LetterHand = () => {
  const dispatch = useDispatch();
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
    <OuterWrapper>
      <h2>Letter Hand</h2>&nbsp;
      <div className={'outer-list-wrapper'}>
        <ul className="letter-list">
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
        {letterHand.length === 0 && !isTransitioning && <p style={{ color: 'pink' }}>your hand is empty</p>}
      </div>
      <SelectionButton
        onClick={drawTile}
        className="draw-btn"
        disabled={isTransitioning}
        isTransitioning={isTransitioning}
      >
        Draw A Tile
      </SelectionButton>
      {/* <div className='loading-wrapper'>
        <Bars height='40' width='40' color='#4fa94d' ariaLabel='bars-loading' wrapperStyle={{}} wrapperClass='' visible={state.isTransitioning} />
      </div> */}
    </OuterWrapper>
  );
};

export default LetterHand;

const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media (max-width: 794px) {
    padding-bottom: 10px;
  }

  .outer-list-wrapper {
    width: 100%;
    .letter-list {
      padding: 0;
      list-style: none;
    }
  }

  .loading-wrapper {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
  }
`;

const SelectionButton = styled.button`
  background-color: ${(props) => (props.isTransitioning ? 'red' : '#4caf50')};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.isTransitioning ? 'wait' : 'pointer')};
  font-size: '16px';
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  @media (max-width: 794px) {
    padding: 20px 80px;
  }
`;
