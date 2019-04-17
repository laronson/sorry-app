import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/root-reducer.js';

export default function configureStore(initialState = {}) {
  return createStore(
    RootReducer,
    applyMiddleware(thunk)
  );
}
