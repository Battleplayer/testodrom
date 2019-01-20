import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import savedValues from './reducers/Reducer';
import products from './reducers/loadProductsReducer'

const rootReducer = combineReducers({
    savedValues,
    products
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));
export let persistor = persistStore(store);
