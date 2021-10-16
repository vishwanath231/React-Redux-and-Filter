
import { UserAction  } from '../Constants/UserConstant';



export const setUsers = (users) => {
    return {
        type: UserAction.SET_USERS,
        payload: users
    }
}


