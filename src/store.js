import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;
