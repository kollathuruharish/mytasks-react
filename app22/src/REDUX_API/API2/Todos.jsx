import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodosAction } from './actions'

class Todos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllTodosFunc()}}>Get All Todos</button>
                {this.props.todos && this.props.todos.map((todo) => {
                    return <h1>{todo.title}</h1>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllTodosFunc:() => dispatch(getAllTodosAction())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Todos)
