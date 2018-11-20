import { createStore, combineReducers } from 'redux';

import valueState from './reducers/inputReducer';

const rootReducer = combineReducers({ valueState });

export default (process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    : createStore(rootReducer));