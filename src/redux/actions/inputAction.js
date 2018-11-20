export const actionTypes = {
    ADD_VALUE: 'ADD_VALUE',
    REMOVE_VALUE: 'REMOVE_VALUE'
};


export const addValue = value => ({
    type: actionTypes.ADD_VALUE,
    payload:{
        value,
    }
});
export const removeValue = value => ({
    type: actionTypes.REMOVE_VALUE,
    payload:{
        value,
    }
});