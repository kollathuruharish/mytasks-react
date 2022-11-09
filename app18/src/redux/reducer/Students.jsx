import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllStudentsAction } from './action';

 class Students extends Component {
    getAllstudentsDetails=()=>{
        this.props.dispatch(getAllStudentsAction())
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Hello from Students</h2>
                <button onClick={this.getAllstudentsDetails}>Click</button>
                {this.props.Students.map((stds)=>{
                    return <h1 key={stds}>{stds}</h1>

                })}
            </div>
        );
    }

    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllstudents())
    // }
}
function  mapStateToProps(state) {
    return {
        Students:state,
    }
}
export default connect(mapStateToProps)(Students);