import React, {useState} from "react"

export function Kalyan(){
    const [users,setusers]=useState([{"fname":"Lokesh","lname":"Raj"},{"fname":"Hari","lname":"kishore"},{"fname":"Saranya","lname":"J"},{"fname":"Sai","lname":"prakash"}])

    return(
        <div>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user.fname}-{user.lname}</li>
                })}
            </ul>
        </div>
    )
}

export const Product = () =>{
    const [Item,setItem]=useState([{"mobile":"Redmi","color":"Black"},{"mobile":"Realme","color":"gold"},{"mobile":"Oppo","color":"red"}])
    return(
        <div>
            <ul>
                {Item.map((Product,i)=>{
                    return <li key={i}>{Product.mobile} - {Product.color}</li>
                })}
            </ul>
        </div>
    )
}
export default Kalyan