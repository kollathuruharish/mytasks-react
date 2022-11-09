import axios from 'axios'
import { GET_ALL_USERS } from "./actiontype";

export function getAllusersAction() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
    //     console.log(res.data)
    // })
    // return {
    //     type:GET_ALL_USERS,
    //     payload:res.data
    // }
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data,

            });

        });
    };
}