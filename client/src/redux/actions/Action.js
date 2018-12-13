import axios from "axios/index";

export const actionTypes = {
    ADD_NAME: 'ADD_NAME',
    REMOVE_NAME: 'REMOVE_NAME',
    REQUEST_START: 'REQUEST_START',
    REQUEST_SUCCESS: 'REQUEST_SUCCESS',
    REQUEST_ERROR: 'REQUEST_ERROR',
    ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT'
};


export const addName = name => ({
    type: actionTypes.ADD_NAME,
    payload: {
        name,
    }
});
export const addProduct = newProduct => ({
    type: actionTypes.ADD_NEW_PRODUCT,
    payload: {
        newProduct,
    }
});
export const removeName = name => ({
    type: actionTypes.REMOVE_NAME,
    payload: {
        name,
    }
});
export const requestStart = () => ({
    type: actionTypes.REQUEST_START,
});
export const requestSuccess = products => ({
    type: actionTypes.REQUEST_SUCCESS,
    payload: {
        products
    }
});
export const requestError = error => ({
    type: actionTypes.REQUEST_ERROR,
    payload: {
        error
    }
});

export const fetchData = () => async dispatch => {
    dispatch(requestStart());
    await axios
        .get("http://localhost:3001/productslist")
        .then(({data}) => dispatch(requestSuccess(data)))
        .catch(({message}) => dispatch(requestError(message)));
};