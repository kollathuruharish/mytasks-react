import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export const Register = () => {
    const [users, setusers] = useState([])
    const [user, setuser] = useState({
        id: "",
        userName: "",
        email: "",
        password: "",
        houseNo: "",
        city: "",
        street: "",
        state: "",
        zip: ""
    })
    const handleChange = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }
    const addUser = () => {
        let userData = [...users]
        userData.push(user)
        axios.post("http://localhost:3000/register", user).then((res) => {
            console.log(res.data);
        })
        setusers(userData)
        clearForm()
        window.location = "http://localhost:3001/users"
    }
    const clearForm = () => {
        setusers({
            id: "",
            userName: "",
            email: "",
            password: "",
            houseNo: "",
            city: "",
            street: "",
            state: "",
            zip: ""

        })
    }
    return <div>
        <h1>I am from Register here</h1>
        <form>
            <div className="mb-3">
                <label for="id" className="form-label">Id</label>
                <input type="text" className="form-control" id="" name="id" value={user.id}
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="  userName" className="form-label">UserName</label>
                <input type="text" className="form-control" name="userName" value={user.userName} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => handleChange(e)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => handleChange(e)} />
            </div>

            <div className="mb-3">
                <label>Address:</label><br />
                <label for="houseNo" className="form-label">House No</label>
                <input type="text" className="form-control" name="houseNo" value={user.houseNo} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="street" className="form-label">Street</label>
                <input type="text" className="form-control" name="street" value={user.street} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="city" className="form-label">City</label>
                <input type="text" className="form-control" name="city" value={user.city} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="state" className="form-label">State</label>
                <input type="text" className="form-control" name='state' value={user.state} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" name="zip" value={user.zip} onChange={(e) => handleChange(e)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={addUser}>Submit</button>
        </form>

    </div>;
};
