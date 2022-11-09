import React, { Component } from 'react'

export default class Practicechild1 extends Component {
    constructor(props) {
        super(props)
        console.log("hello from constructor from child")
    
        this.state = {
             
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Hello from getDerivedStateFromProps",props,state)
        return null
    }
    shouldComponentUpdate(){
        console.log("Hello from shouldComponentUpdate from child")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("Hello from getSnapshotBeforeUpdate from child")
        return null
    }
    componentDidUpdate(){
        console.log("Hello from componentDidUpdate from child")
    }
    
    render() {
        console.log("Hello from render-child comp")
        return (
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}
