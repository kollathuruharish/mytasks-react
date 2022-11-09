import { GET_ALL_TODOS } from "../actions/actionTypes";

const defaultState={
    todos:{},
};
export default function todosReducer(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_TODOS:
            return action.payload
    
        default:
            return state.todos
    }
}