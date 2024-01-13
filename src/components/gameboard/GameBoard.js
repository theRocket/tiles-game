import React, { useState } from 'react'
import CrosswordGrid from '../CrosswordGrid'
import LetterHand from '../letter-hand/LetterHand'
import LetterBag from '../LetterBag'
import { drawRandomLetter, createInitialLetterBag, createInitialGrid, reduceOneLetter, removeOneLetter } from '../gameUtils'
import styled from 'styled-components'
import { GameBoardProvider } from './context-config'

const GameBoard = () => {
  //using the useState hook to manage children's state
  const [gridState, setGridState] = useState(createInitialGrid)

  return (
    <GameBoardProvider>
      <OuterWrapper>
        <div className='letter-bag-wrapper'>
          <LetterBag />
        </div>
        <div className='bottom-content'>
          <div className='letter-hand'>
            <LetterHand />
          </div>
          <div className='cross-word-grid'>
            <CrosswordGrid gridSize={10} cellValues={gridState} setCellValues={setGridState} />
          </div>
        </div>
      </OuterWrapper>
    </GameBoardProvider>
  )
}

export default GameBoard

const OuterWrapper = styled.div`
  .letter-bag-wrapper {
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px #eee;
    margin: 10px;
    padding: 0px;
  }

  .bottom-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;

    @media (max-width: 794px) {
      flex-direction: column;
    }
  }

  .letter-hand {
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px #eee;
    margin: 10px;
    padding: 10px;
    width: 50%;
    @media (max-width: 794px) {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }

  .cross-word-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px #eee;
    margin: 10px;
    padding: 10px;
    width: 50%;
    @media (max-width: 794px) {
      width: 100%;
      margin: 10px 0;
      padding: 0;
    }
  }
`
