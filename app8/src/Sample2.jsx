import React,{useState} from 'react'
import Child2 from './Child2'

export default function Sample2() {
    const [users, setusers] = useState([])
    const receiveData = (u) => {
        setusers(u)
    }
    return (
        <div>
            <ul>
                {users.map((user) => {
                    return <li>{user}</li>
                })}
            </ul>
            <Child2 receiveData={receiveData} />
        </div>
    )
}