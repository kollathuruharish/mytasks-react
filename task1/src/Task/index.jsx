import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Index() {
    const [user, setuser] = useState([]);
    const [user1, setuser1] = useState([]);
    const [user2, setuser2] = useState([]);
    useEffect(() => {
        api1();
        api2();
        api3();
    }, [])

    const api1 = () => {
        axios.get("https://reqres.in/api/users/1").then((res) => {
            setuser(res?.data.data.email)
        })
    }
    const api2 = () => {
        axios.get("https://reqres.in/api/users/3").then((res) => {
            setuser1(res?.data.data.email)
        })
    }
    const api3 = () => {
        axios.get("https://reqres.in/api/users/10").then((res) => {
            setuser2(res?.data.data.email)
        })
    }
    return (
        <div>
            {user ?
                <p>{user}</p>
                : "loading"}
            {user1 ?
                <p>{user1}</p>
                : "loading"}
            {user2 ?
                <p>{user2}</p>
                : "loading"}
        </div>
    )
}
export default Index;
