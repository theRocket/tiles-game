import { configureStore } from '@reduxjs/toolkit';
import tilesReducer from './slice';

export default configureStore({
  reducer: {
    tiles: tilesReducer
  }
});
