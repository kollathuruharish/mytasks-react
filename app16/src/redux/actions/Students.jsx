import React, { Component } from 'react'
import {connect } from 'react-redux'

class Students extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Students.map((stds)=>{
                    return <p key={stds}>{stds}</p>
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        Students: state.Students
    }
}
export default connect(mapStateToProps)(Students)
