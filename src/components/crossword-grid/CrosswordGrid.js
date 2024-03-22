//CrosswordGrid.js
///useState, and useRef
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animationDuration } from '../../models/constants';
import { playLetter, playLetterEnd } from '../../store/slice';

const CrosswordGrid = ({ gridSize, cellValues, setCellValues }) => {
  // const { state, setIsTransitioning, updateLetterPlayed, updateLetterHand } = useContext(GameBoardContext);
  //what cell in the grid is selected
  const [selectedCell, setSelectedCell] = useState({ row: null, col: null });
  //which way the crossword is going, across or down
  const [inputDirection, setInputDirection] = useState('right'); // 'right' or 'down'
  //creates an array of refs, one for each cell in the grid

  const dispatch = useDispatch();

  const isTransitioning = useSelector((state) => state.tiles.isTransitioning);
  const letterHand = useSelector((state) => state.tiles.letterHand);

  //below, ...Array(gridSize*gridSize) makes a new array and expands the elements in to a new array of undefined values to make it suitable for mapping
  //.map() is a JS array method that creates a new array by doing something  to each element, in this case calling React.createRef() on each undefined object
  //This array of ref objects now allow direct access to the elements in the array. Ref objects have a property called "current" that in this case will hold the reference to the cell.
  //The entire object passed to useRef initializes the .current property of the ref object, in this case with an array of refs , one for each cell.
  //so "cellRefs" becomes an array of ref objects that can be attached to corresponding input elemenst in my grid.
  //cellRefs is like a toolbox where each tool can connect to a specific input in my grid.
  //when I want to set focus to a specific cell, I will access that ref's "current" property and call the "focus()" method on that cell"
  const cellRefs = useRef([...Array(gridSize * gridSize)].map(() => React.createRef()));

  useEffect(() => {
    if (selectedCell.row != null && selectedCell.col != null) {
      const cellIndex = selectedCell.row * gridSize + selectedCell.col;
      const cellRef = cellRefs.current[cellIndex];
      if (cellRef && cellRef.current) {
        cellRef.current.focus(); // Set focus
      }
    }
  }, [selectedCell, gridSize]); // Depend on selectedCell and gridSize

  // Handles updating a cell with a letter typed by the user, and calculates the next cellindex to receive focus and sets focus on that cell
  const handleCellChange = (cellIndex, newValue) => {
    const playedLetter = newValue.toUpperCase();

    //prevent the user from typing a letter not in the letter hand
    if (!letterHand.includes(playedLetter)) {
      alert('You may only use letters present in your letter hand');
      return;
    }

    // Update the cell value
    const newValues = [...cellValues];
    newValues[cellIndex] = playedLetter;
    setCellValues(newValues);

    // Calculate the index of the next cell based on inputDirection
    let nextRow = Math.floor(cellIndex / gridSize);
    let nextCol = cellIndex % gridSize;

    if (inputDirection === 'right') {
      nextCol++;
      if (nextCol >= gridSize) {
        // Stop at the edge
        return;
      }
    } else if (inputDirection === 'down') {
      nextRow++;
      if (nextRow >= gridSize) {
        // Stop at the edge
        return;
      }
    }

    // const nextCellIndex = nextRow * gridSize + nextCol;
    // Update selectedCell to the next cell
    setSelectedCell({ row: nextRow, col: nextCol });

    //deleting /fading out the newValue using onPlayLetter aka handlePlayLetter
    if (letterHand.includes(playedLetter)) {
      handlePlayLetter(playedLetter);
    }
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedCell.row === rowIndex && selectedCell.col === colIndex) {
      // Toggle direction if the same cell is clicked again
      setInputDirection((prevDirection) => (prevDirection === 'right' ? 'down' : 'right'));
    } else {
      setSelectedCell({ row: rowIndex, col: colIndex });
      setInputDirection('right'); // Default to right when a new cell is selected
    }
  };

  //Handler function that updates states when a letter is played on the grid.
  //playedLetter should be given to handlePlayLetter whenever a user successfully types a new letter in the grid.
  const handlePlayLetter = (playedLetter) => {
    dispatch(playLetter(playedLetter));

    setTimeout(() => {
      dispatch(playLetterEnd());
    }, animationDuration);

    //Set the letter played in the grid that must be removed from the hand
    // updateLetterPlayed(playedLetter);
    // setIsTransitioning(true);

    // setTimeout(() => {
    //   updateLetterHand(removeOneLetter(state.letterHand, playedLetter));
    //   setIsTransitioning(false);
    //   updateLetterPlayed(null);
    // }, 2000);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold my-5">Game Board</h2>
      <table>
        <tbody>
          {Array.from({ length: gridSize }).map((_, rowIndex) => (
            <tr className="table-row" key={rowIndex}>
              {Array.from({ length: gridSize }).map((_, colIndex) => {
                const cellIndex = rowIndex * gridSize + colIndex;
                const isCellSelected = rowIndex === selectedCell.row && colIndex === selectedCell.col;
                const directionIndicator = isCellSelected ? (inputDirection === 'right' ? '>' : 'V') : '';
                return (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className="table-cell p-1"
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {isCellSelected && <span className="direction-indicator">{directionIndicator}</span>}
                    <input
                      className="bg-[#ff0] text-black w-10 h-10 border-black text-center text-xl font-normal"
                      ref={cellRefs.current[cellIndex]}
                      type="text"
                      maxLength="1"
                      value={cellValues[cellIndex]}
                      onChange={(e) => handleCellChange(cellIndex, e.target.value)}
                      onKeyDown={(e) => {
                        if (isTransitioning) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrosswordGrid;
