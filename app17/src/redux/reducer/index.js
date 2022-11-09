const defaultState={ 
    users:["Vinoth","Chaitanya","Rajesh","Arvind"]
}


const rootReducer=(state=defaultState,actions)=>{
    switch (actions.type) {
        case "GET_ALL_USERS":
            return defaultState.users

            case "DELETE_USER":
                defaultState.users.pop()
            return defaultState.users
            
    
        default:
            return defaultState.users
    }

}
export default rootReducer