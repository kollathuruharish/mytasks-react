import { useState } from "react"
import Samplechild from "./Samplechild"


const Sample=()=>{
    const [users,setusers]=useState([])
    const receiveData=(user)=>{
         setusers(user)
    }
    return (
        <div>
            <ul>{users.map((user)=>{
                return <li>{user}</li>
            })}</ul>
            <Samplechild receiveData={receiveData}/>
        </div>
    )
}
export default Sample