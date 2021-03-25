//returns objects of the correctly formatted action

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});