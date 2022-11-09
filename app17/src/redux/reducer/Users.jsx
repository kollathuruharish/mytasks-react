import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteUserAction,getAllUsersAction} from './redux/actions';


class Users extends Component {
    getAllUsersDetails=()=>{
        this.props.dispatch(getAllUsersAction())
    }
    deleteUser=()=>{
        
        this.props.dispatch(deleteUserAction())
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello from users component</h1>
                <button onClick={this.getAllUsersDetails}>Get Users</button>
                <button onClick={this.deleteUser}>Delete User</button>
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllUsers())
    // }
}

function  mapStateToProps(state) {
    return {
      users: state,
    }
}
export default  connect(mapStateToProps)(Users)