import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:{
                 fname:""
             },
             users:[]
        };
    }
    
    handleAddUser=()=>{
        let AllUsers =[...this.state.users];
        AllUsers.push(this.state.user);
        this.setState({users:AllUsers});
    };
    handlechange=(e)=>{
        let newUser= {...this.state.user};
        newUser[e.target.name]=e.target.value;
        this.setState({user:newUser});
    }
    render() {
        return (
            <div>
                <h1>Hello users</h1>

                <form>
                    <label htmlFor="fname">First Name : </label>
                    <input type="text" name='fname' value={this.state.user.fname} onChange={(e)=>{this.handlechange(e)}} />
                    <button type='button'>Add User</button>
                </form>
                <hr />
                {this.state.users.map((user)=> <p>{user.fname}</p>)}
            </div>
        )
    }
}
