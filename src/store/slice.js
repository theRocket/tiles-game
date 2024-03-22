import { createSlice } from '@reduxjs/toolkit';
import { createInitialLetterBag, drawRandomLetter } from '../utils';

export const tilesSlice = createSlice({
  name: 'tiles',
  initialState: {
    canDraw: true,
    drawnLetter: null,
    isTransitioning: false,
    letterBag: createInitialLetterBag(),
    letterBeingPlayed: null,
    letterHand: []
  },
  reducers: {
    drawLetter: (state) => {
      const letter = drawRandomLetter(state.letterBag);

      state.drawnLetter = letter;
      state.isTransitioning = true;
      state.letterHand.push(letter);
    },
    drawLetterEnd: (state) => {
      const letter = state.drawnLetter;

      state.drawnLetter = null;
      state.isTransitioning = false;
      state.letterBag = Object.entries(state.letterBag).reduce(
        (lb, [key, value]) => (key === letter ? { ...lb, [key]: --value } : { ...lb, [key]: value }),
        {}
      );
      state.canDraw = Object.values(state.letterBag).some((value) => value > 0);
    },
    playLetter: (state, action) => {
      const letter = action.payload;
      const index = state.letterHand.indexOf(letter);

      if (index > -1) {
        state.isTransitioning = true;
        state.letterBeingPlayed = letter;
      }
    },
    playLetterEnd: (state, action) => {
      const letter = state.letterBeingPlayed;
      const index = state.letterHand.indexOf(letter);

      if (index > -1) {
        state.isTransitioning = false;
        state.letterBeingPlayed = null;
        state.letterHand = state.letterHand.toSpliced(index, 1);
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { drawLetter, drawLetterEnd, playLetter, playLetterEnd } = tilesSlice.actions;

export default tilesSlice.reducer;
