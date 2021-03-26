import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//logger(array) is the middleware that used here
const middlewares = [logger];

//get return the values(middlewares) from applyMiddleware(as individual arguments)
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;