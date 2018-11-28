import {actionTypes} from '../actions/Action';

const defaultState = {
    isRequestInProgress: false,
    products: [],
    error: ''
};


export default function (state = defaultState, {type = '', payload = {}}){
    switch (type) {
        case actionTypes.REQUEST_START:
            return {
                ...state,
                isRequestInProgress: true
            };
            case actionTypes.REQUEST_SUCCESS:
                return {
                    ...state,
                    isRequestInProgress: false,
                    products: payload.products.productslist,
                };
                case actionTypes.REQUEST_ERROR:
                return {
                    ...state,
                    isRequestInProgress: false,
                    error: payload.error
                };
        default: return state
    }
}