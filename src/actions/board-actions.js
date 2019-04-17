import {createAction} from 'redux-actions';

export const setMoveNumber = (moveNumber) => (dispatch) => {
  dispatch(createAction("SET_MOVE_NUMBER")(moveNumber));
}

export const movePiece = (newLocations) => (dispatch) => {
  dispatch(createAction("MOVE_PIECE")(newLocations))
}
