import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import Reducer from './Reducer';

const store = createStore(Reducer, {}, applyMiddleware(thunk, logger))
export default store;