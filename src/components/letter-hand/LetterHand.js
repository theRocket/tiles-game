import React from 'react'
import styled from 'styled-components'
import { Bars } from 'react-loader-spinner'
import useLetterHandStore from './useLetterHandStore'

const LetterHand = () => {
  const { state, handleDrawLetter, isLetterBeingPlayed, foundIndex } = useLetterHandStore()

  return (
    <OuterWrapper>
      <h2>Letter Hand</h2>&nbsp;
      <div className={'outer-list-wrapper'}>
        <ul className='letter-list'>
          {state &&
            state.letterHand &&
            state.letterHand.map((letter, index) => (
              <li key={index} className={`tiles ${isLetterBeingPlayed && foundIndex === index ? 'fade-out' : ''}`}>
                {letter}
              </li>
            ))}
          {state.isTransitioning && state.drawnLetter && <li className='tiles fade-in'>{state.drawnLetter}</li>}
          {state.letterHand.length === 0 && !state.isTransitioning && <li style={{ color: 'pink' }}>your hand is empty</li>}
        </ul>
      </div>
      <SelectionButton onClick={handleDrawLetter} className='draw-btn' disabled={state.isTransitioning} isTransitioning={state.isTransitioning}>
        Draw A Tile
      </SelectionButton>
      {/* <div className='loading-wrapper'>
        <Bars height='40' width='40' color='#4fa94d' ariaLabel='bars-loading' wrapperStyle={{}} wrapperClass='' visible={state.isTransitioning} />
      </div> */}
    </OuterWrapper>
  )
}

export default LetterHand

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
`

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
`
