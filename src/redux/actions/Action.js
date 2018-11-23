export const actionTypes = {
    ADD_NAME: 'ADD_NAME',
    REMOVE_NAME: 'REMOVE_NAME'
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
