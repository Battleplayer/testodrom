import {actionTypes} from '../actions/inputAction';

const defaultState = {
    value: ''
};

export default function (state = defaultState, {type = '', payload: value}) {
    switch (type) {
        case actionTypes.REMOVE_VALUE:
            return {
                ...state,
                value: '',
            };

        case actionTypes.ADD_VALUE:
            return {
                ...state,
                value,
            };

        default:
            return state;
    }
}