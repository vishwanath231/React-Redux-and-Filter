import { UserAction } from '../Constants/UserConstant';


const initalState = {
    usersList: []
}

export const userReducer = (state = initalState, { type, payload }) => {
    
    switch (type) {
        case UserAction.SET_USERS:
            return {
                ...state,
                usersList: payload,
            } 
        default:
            return state;
    }
}