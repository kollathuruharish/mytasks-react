import { useState } from "react"
import Child1 from "./Child1"

export default function Parent(){
    //step 2
    const [allUsers, setAllUsers]=useState([])
    //step3
    const getFromChild = (users) =>{
        setAllUsers(users)
    }

    return(

        <div>
            <ul>
                {allUsers.map((user,i)=>{
                    return  <li key={i}>{user}</li>
                   
                })}
            </ul>
            {/* //step4 */}
            <Child1 recieveData={getFromChild}/> 
        </div>
    )
}