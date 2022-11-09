import { GET_ALL_USERS } from "../Action/actiontype";

const defaultState={
    users:{},
};

export default function usersReducer(state=defaultState,action){
    switch (action.type) {

        case GET_ALL_USERS:
            return action.payload
    
        default :
            return state.users;
    }

}