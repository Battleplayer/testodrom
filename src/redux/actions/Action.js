export const actionTypes = {
    ADD_NAME: 'ADD_NAME'
};


export const addName = name => ({
    type: actionTypes.ADD_NAME,
    payload: {
        name,
    }
});
