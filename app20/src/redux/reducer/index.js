import { combineReducers } from "redux"
import Students from "../Students"
import CompReducer from "../../redux1/reducer"

const defaultState={ 
    Students:[]
    // sub:[]
    
    }
// let allStudents=["Chandu","Lokesh","Harish","Abi"]
// let allSubjects=["Maths","Science","English"]
const rootReducer=(state=defaultState,action)=>{
    console.log(state)

    switch (action.type) {
        case "GET_ALL_STUDENTS":
          return defaultState.Students;

            // case "GET_ALL_SUBJECTS":
            //   return allSubjects;
            case "DELETE_STUDENTS":
            //  let newStudents=[...state]
            //  newStudents.pop()
            //  return newStudents;

            //  let newStudents=[...state]
            //    return newStudents.filter((Students)=> Students ! ==action.payload)

             case "CREATE_STUDENTSDETAILS":
              let newStudents=[...state];
              newStudents.push(action.payload);
              return newStudents
        default:
            return defaultState.Students
    }
}
const Reducer=combineReducers({
    Students:rootReducer,
    Photos:CompReducer
    

})
export default Reducer