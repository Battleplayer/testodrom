import axios from "axios/index";

export const actionTypes = {
    ADD_NAME: 'ADD_NAME',
    REMOVE_NAME: 'REMOVE_NAME',
    STORE_LOCALE: 'STORE_LOCALE',
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
export const removeName = name => ({
    type: actionTypes.REMOVE_NAME,
    payload: {
        name,
    }
});
export const storeLocale = locale => ({
    type: actionTypes.STORE_LOCALE,
    payload: {
        locale,
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
export const sendData = (body) => async dispatch => {
    dispatch(requestStart());
    await axios
        .post("http://localhost:3001/productslist", body)
        .then(response => console.log(response))
        .catch(error => console.log(error))
};
export const deleteData = (id) => {
    axios
        .delete(`http://localhost:3001/productslist/${id}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))
};