// import { func } from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllSubjects } from './action'

 class Subjects extends Component {
     showSubDetails=()=>{
         this.props.dispatch(getAllSubjects())
     }
    render() {
        return (
            <div>
                <h2>Click on showing subject details</h2>
                <button onClick={this.showSubDetails}>Sub details</button>
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        sub:state
    }
}
export default connect(stateToProps)(Subjects)