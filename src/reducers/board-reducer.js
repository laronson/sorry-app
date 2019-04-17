import {handleActions} from 'redux-actions';

const BoardReducer = handleActions({
  ["SET_MOVE_NUMBER"]: (state, action) => (
    Object.assign({}, state, {moveNumber: action.payload})
  ),
  ["MOVE_PIECE"]: (state, action) => (
    Object.assign({}, state, {pieceLocations: action.payload})
  )
}, {
  moveNumber: 0,
  pieceLocations: new Array(59).fill(false)
})

export default BoardReducer;
