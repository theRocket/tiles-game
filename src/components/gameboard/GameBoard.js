import React, { useState } from 'react';
import { createInitialGrid } from '../../utils';
import CrosswordGrid from '../crossword-grid/CrosswordGrid';
import LetterBag from '../letter-bag/LetterBag';
import LetterHand from '../letter-hand/LetterHand';

const GameBoard = () => {
  //using the useState hook to manage children's state
  const [gridState, setGridState] = useState(createInitialGrid);

  return (
    <div>
      <div className="board-border shadow-game-board m-2.5">
        <LetterBag />
      </div>
      <div className="flex flex-col justify-center items-start m-2.5 md:flex-row">
        <div className="board-border shadow-game-board w-full md:m-2.5 md:p-2.5 md:w-1/2">
          <LetterHand />
        </div>
        <div className="flex flex-col justify-center board-border shadow-game-board w-full my-2.5 md:m-2.5 md:p-2.5 md:w-1/2">
          <CrosswordGrid gridSize={10} cellValues={gridState} setCellValues={setGridState} />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
