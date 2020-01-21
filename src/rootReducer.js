import { combineReducers } from 'redux';
import { starWarsReducer } from './components/starWars/starWarsReducer';

export default combineReducers({
  starWarsReducer: starWarsReducer
  // also possible to use short hand of just starWarsReducer
});
