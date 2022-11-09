import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.users && this.props.users.map((user) => {
                    return <h1>{user.name}</h1>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        Users: state
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         getAllusersFunc:() => dispatch(getAllusersAction())
//     }

// }
export default connect(mapStateToProps)(Users)
