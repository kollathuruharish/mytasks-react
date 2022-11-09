import axios from "axios";
import { GET_ALL_TODOS } from "./actionTypes";

export function getAllTodosAction() {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
    //     console.log(res.data)
    // })
    // return {
    //     type:GET_ALL_TODOS,
    //     payload:res.data
    // }
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            dispatch({
                type: GET_ALL_TODOS,
                payload: res.data,

            });

        });
    };
}