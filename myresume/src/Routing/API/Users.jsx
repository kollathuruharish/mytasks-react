import { useEffect, useState } from "react";
import axios from 'axios'

export const Users = () => {
    const [users,setusers]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            console.log(data);
            setusers(data)
        })
    },[])
  return (
    <div>
          <h1>hello from users component</h1>
          {users.map((user)=>{
              return <h1>{user.email}</h1>
          })}
    </div>
  )
};
