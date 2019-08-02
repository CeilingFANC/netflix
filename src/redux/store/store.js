import {createStore, applyMiddleware} from 'redux';
import listReducer from '../reducers/list';
import thunk from 'redux-thunk';

const store = createStore(listReducer,applyMiddleware(thunk));

export default store;