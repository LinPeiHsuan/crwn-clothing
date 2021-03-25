import {UserActionTypes} from './user.types';

//returns objects of the correctly formatted action

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});