import {actionTypes} from '../actions/Action';

const defaultState = {
    value: 'something',
    name: '',
};

export default function (state = defaultState, {type = '', payload = {}}) {
    const {name} = payload;
    switch (type) {
        case actionTypes.ADD_NAME:
            return {
                ...state,
                name,
            };
            case actionTypes.REMOVE_NAME:
            return {
                ...state,
                name,
            };

        default:
            return state;
    }
}