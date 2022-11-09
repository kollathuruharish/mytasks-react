import axios from 'axios';
import React, { Component } from 'react';

export default class EmployeeData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: "",
                email: "",
                contact: "",
                address: "",
                qualification: "",
                passedOut: "",
                description: ""
            },
            users: [],
        }
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    addUser = () => {
        let newusers = [...this.state.users]
        newusers.push(this.state.user)
        axios.post('http://localhost:3000/users',this.state.user).then(()=>{

        })
        this.setState({ users: newusers })
        console.log(this.users);
        this.clearForm()

    }
    componentDidMount(){
        this.getAllEmployeesData()

    }
    getAllEmployeesData=()=>{
        axios.get("http://localhost:3000/users").then((res)=>{
            let newemployeedata={...this.state}
            console.log(res.data);
            newemployeedata["users"]=res.data
            this.setState(newemployeedata)
        })
    }
    clearForm = () => {
        this.setState({
            user: {
                name: "",
                email: "",
                contact: "",
                address: "",
                qualification: "",
                passedOut: "",
                description: ""
            }
        })
    }

    deleteUsers=(usr)=>{
        axios.delete("http://localhost:3000/users/"+usr.id).then((res)=>{
            let newusers={...this.state.users}
            this.clearForm()
            this.getAllEmployeesData()
        })
    }
    editUsers=(user,i)=>{
        this.setState({user,index:i})

    }
    updateUsers=(i)=>{
        var allusers=[...this.state.users]
        allusers[this.state.index]=this.state.user
        console.log(allusers);
        axios.put("http://localhost:3000/users/"+allusers[this.state.index].id,this.state.user).then((res)=>{
           console.log(allusers); 
           this.clearForm()
           this.getAllEmployeesData()

        })
    }

    render() {
        return <div>
            <form>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" value={this.state.user.name} onChange={(e) => { this.handleChange(e) }} /><br />

                <label htmlFor="">Email: </label>
                <input type="email" name="email" value={this.state.user.email} onChange={(e) => { this.handleChange(e) }} /><br />

                <label htmlFor="">Contact: </label>
                <input type="text" name="contact" value={this.state.user.contact} onChange={(e) => { this.handleChange(e) }} /><br />


                <label htmlFor="">Address: </label>
                <input type="text" name="address" value={this.state.user.address} onChange={(e) => { this.handleChange(e) }} /><br />

                <label htmlFor="">Qualification: </label>
                <input type="text" name="qualification" value={this.state.user.qualification} onChange={(e) => { this.handleChange(e) }} /><br />

                <label htmlFor="">PassedOut: </label>
                <input type="text" name="passedOut" value={this.state.user.passedOut} onChange={(e) => { this.handleChange(e) }} /><br />

                <label htmlFor="">Description: </label>
                <input type="text" name="description" value={this.state.user.description} onChange={(e) => { this.handleChange(e) }} /><br />

                <button onClick={this.addUser}  className='btn btn-danger' type='button'>Add</button>
                <button onClick={this.updateUsers} className='btn btn-warning' type='button'>Update</button>
            </form>
            <table class="table table-dark table-striped">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">contact</th>
                            <th scope="col">address</th>
                            <th scope="col">qualification</th>
                            <th scope="col">passedOut</th>
                            <th scope="col">description</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((usr) => {
                            return (
                                <tr>
                                    <td>{usr.name}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.contact}</td>
                                    <td>{usr.address}</td>
                                    <td>{usr.qualification}</td>
                                    <td>{usr.passedOut}</td>
                                    <td>{usr.description}</td>

                                    <td>
                                        <button type='button' className='btn btn-warning'
                                        onClick={()=>{this.editUsers(usr)}}
                                        >edit</button>
                                    </td>

                                    <td>
                                        <button type='button' className='btn btn-danger'
                                        onClick={()=>{this.deleteUsers(usr)}}
                                        >delete</button>
                                    </td>
                                  
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </table>

        </div>;
    }
}
