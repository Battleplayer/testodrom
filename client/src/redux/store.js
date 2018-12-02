import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import savedValues from './reducers/Reducer';
import products from './reducers/loadProductsReducer'

const rootReducer = combineReducers({
    savedValues,
    products
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;