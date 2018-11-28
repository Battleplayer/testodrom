import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import savedValues from './reducers/Reducer';
import products from './reducers/loadProductsReducer'

const rootReducer = combineReducers({
    savedValues,
    products
});

export default createStore(rootReducer, applyMiddleware(thunk))
// (process.env.NODE_ENV === 'development'
//     ? createStore(
//         rootReducer,
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//         applyMiddleware(thunk),
//     )
//     : createStore(rootReducer, applyMiddleware(thunk)));
