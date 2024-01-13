import { createContext, useReducer } from 'react'
import { createInitialLetterBag } from '../gameUtils'

export const initalState = {
  letterBag: createInitialLetterBag(),
  drawnLetter: '',
  playedLetter: '',
  count: 0,
  isTransitioning: false,
  letterHand: [],
}

const actions = {
  UPDATE_COUNT: 'UPDATE_COUNT',
  SET_LETTERHAND: ' SET_LETTERHAND',
  SET_LETTER_BAG: ' SET_LETTER_BAG',
  SET_DRAWN_LETTER: ' SET_DRAWN_LETTER',
  SET_LETTER_PLAYED: ' SET_LETTER_PLAYED',
  IS_TRANSITIONING: 'SET_ISTRANSITIONING',
}

export const GameBoardContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_LETTERHAND:
      return {
        ...state,
        letterHand: action.payload,
      }
    case actions.SET_LETTER_BAG:
      return {
        ...state,
        letterBag: action.payload,
      }
    case actions.SET_DRAWN_LETTER:
      return {
        ...state,
        drawnLetter: action.payload,
      }
    case actions.SET_LETTER_PLAYED:
      return {
        ...state,
        playedLetter: action.payload,
      }
    case actions.UPDATE_COUNT:
      return {
        ...state,
        count: action.payload,
      }
    case actions.IS_TRANSITIONING:
      return {
        ...state,
        isTransitioning: action.payload,
      }

    default:
      return state
  }
}

export const GameBoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const value = {
    state,
    updateCount: (count) => {
      dispatch({ type: actions.UPDATE_COUNT, payload: count })
    },
    updateLetterHand: (hand) => {
      dispatch({ type: actions.SET_LETTERHAND, payload: hand })
    },
    updateLetterBag: (bag) => {
      dispatch({ type: actions.SET_LETTER_BAG, payload: bag })
    },
    updateDrawnLetter: (drawnLetter) => {
      dispatch({ type: actions.SET_DRAWN_LETTER, payload: drawnLetter })
    },
    updateLetterPlayed: (playedLetter) => {
      dispatch({ type: actions.SET_LETTER_PLAYED, payload: playedLetter })
    },
    setIsTransitioning: (isTansitioning) => {
      dispatch({ type: actions.IS_TRANSITIONING, payload: isTansitioning })
    },
  }

  return <GameBoardContext.Provider value={value}>{children}</GameBoardContext.Provider>
}
