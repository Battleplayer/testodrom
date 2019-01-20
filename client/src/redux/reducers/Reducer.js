import {actionTypes} from '../actions/Action';

const defaultState = {
    name: '',
};

export default function (state = defaultState, {type = '', payload = {}}) {
    const {name, locale} = payload;
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
        case actionTypes.STORE_LOCALE:
            return {
                ...state,
                locale,
            };

        default:
            return state;
    }
}