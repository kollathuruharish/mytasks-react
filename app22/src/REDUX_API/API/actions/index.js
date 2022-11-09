
// import { GET_ALL_USERS } from "./actionTypes";
// import axios from 'axios';
// import Users from "../Components/Users";
// import { GET_DELETE_USERS } from "../../API3/Action/actiontype";
// export function getAllUsersAction(){
//     return async (dispatch)=>{
//    let AllUsers=await axios.get("https://jsonplaceholder.typicode.com/users")
//         dispatch({
        
//             type:GET_ALL_USERS,
//             payload:AllUsers.data
        
//     })
// }
// }
//     export function DeleteUsersAction(user){
//         return async (dispatch)=>{
//         axios.delete("https://jsonplaceholder.typicode.com/users/"+Users.id).then((res)=>{
//             dispatch(getAllUsersAction())
        
//         })
//     }
// }

// //     return (dispatch)=>{
// //         axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
// //         console.log(res.data)
// //         dispatch ({
// //             type:GET_ALL_USERS,
// //             payload:res.data,
// //         });
// //     });
// //     };
//  }
export function getAllUsersAction(){
    return{
        type:"GET_ALL_USERS"
    }
}

export function DeleteUsersAction(){
    return{
        type:"DELETE_USERS"
    }
}

export function CreateUsersAction(user){
    return{
        type:"CREATE_USERS",
        payload:user
    }
}
export function userDeleteAction(user){
    return{
        type:"USERS_DELETE",
        payload:user
    }
}