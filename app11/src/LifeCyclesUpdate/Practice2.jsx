import React, { Component } from 'react'

export default class Practice2 extends Component {
        constructor(props) {
            super(props)
            console.log("Hello from Constructor Comp")
        
            this.state = {
                 message:"Hello World"
            }
        }
        static getDerivedStateFromProps(props,state){
            console.log("Hello from getDerivedStateFromProps", props,state)
            return null
        }
        shouldComponentUpdate(){
            console.log("Hello from shouldComponentUpdate")
            return true

        }
        getSnapshotBeforeUpdate(){
            console.log("Hello From getSnapshotBeforeUpdate")
            return null
        }
        componentDidUpdate(){
            console.log("Hello from  componentDidUpdate")
        }
        message=()=>{
            this.setState({message:"Olympics"})
        }
        render() {
            console.log("Hello from Render Comp")
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.message}>change Message</button>
            </div>
        )
    }
}
