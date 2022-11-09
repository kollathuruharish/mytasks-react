import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateUsersAction, DeleteUsersAction, getAllUsersAction } from '../actions'


class Users extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         users: {
    //             id: "",
    //             name: "",
    //             username: "",
    //             email: ""
    //         }
    //     }

    // }
    getUser = () => {
        this.props.getAllUsers()
    }

    handleDelete = () => {
        this.props.deleteUser()
    }
    handleChange = (e) => {
        let newUser = { ...this.state.users }
        newUser[e.target.name] = e.target.value
        this.setState({ users: newUser })

    }
    handleCreate = () => {
        this.props.createUsers(this.state.users)
    }
    userDelete = (user) => {
        this.props.deleteUser(user)
    }
    render() {
        console.log(this.props)

        return (
            <div>
                <form>
                    <label htmlFor='id'>id</label>
                    <input type='number' name='id' value={this.state.id} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor='id'>name</label>
                    <input type='text' name='name' value={this.state.name} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor='username'>username</label>
                    <input type='text' name='username' value={this.state.username} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor='id'>email</label>
                    <input type='email' name='email' value={this.state.email} onChange={(e) => { this.handleChange(e) }} /><br />
                    <button type='button' onClick={this.handleCreate}>Add</button>
                </form>

                
                    <ul>
                        {this.props.Users && this.props.Users.map((user) => {
                            return (
                                <div>
                                    <li>{user.id}</li>
                                    <li>{user.name}</li>
                                    <li>{user.username}</li>

                                    <li>{user.email}</li>
                                    <button onClick={() => { this.userDelete(user) }} type='button'>Delete</button>
                                </div>
                            )
                        })}
                    </ul>
                



            </div>


        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        users: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllUsers: () => dispatch(getAllUsersAction()),
        deleteUser: (user) => dispatch(DeleteUsersAction(user)),
        createUsers: (user) => dispatch(CreateUsersAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
