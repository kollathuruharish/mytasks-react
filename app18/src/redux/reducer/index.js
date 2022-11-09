import {combineReducers} from "redux"
import ReducerComp from "../../Redux1/Reducer";

const defaultState={
    Students:["Vicky","Senthil","Robin","Lokesh"]
}
let allStudents=["Vicky","Senthil","Robin","Lokesh"]
const rootReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return allStudents;
            
    
        default:
            return []
    }
}
const MainReducer=combineReducers({
    Students:rootReducer,
    Products:ReducerComp
})
export default MainReducer