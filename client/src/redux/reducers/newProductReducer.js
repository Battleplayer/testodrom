import {actionTypes} from "../actions/Action";

const defaultState = {
    vendor: '',
    name: '',
    CPU: ''
};

export default function (state = defaultState, {type = '', payload = {}}) {
    const {newProduct} = payload;
    switch (type) {
        case actionTypes.ADD_NEW_PRODUCT:
            return {
                ...state,
                newProduct,
            };

        default:
            return state;
    }
}