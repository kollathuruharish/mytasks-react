import React, { Component } from 'react'

export default class Practice3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:{
                 fname:"Harish",
                 lname:"Rao",
                 email:"harishrao21@gmail.com",
             }
        }
    }
    static getDerivedStateFromProps(props,state){
         console.log("hello from getDerivedStateFromProps")
         return null
    }
    shouldComponentUpdate(){
         console.log("Hello from shouldComponentUpdate ")
         return true
    }
    getSnapshotBeforeUpdate(){
        console.log("Hello from getSnapshotBeforeUpdate")
        return null

    }
    componentDidUpdate(){
        console.log("Hello from componentDidUpdate")

    }
    changeusers=()=>{
        // this.setState({fname:"chandu",lname:"babu",email:"chandu32@gmail.com"})
        this.setState({users:{fname:"Chandu",lname:"babu",email:"chandu32@gmail.com"}})
    }
    

    
    render() {
        return (
            <div>
                <button onClick={this.changeusers}>Change</button>
                <h2>{this.state.users.fname}</h2>
                <h2>{this.state.users.lname}</h2>
                <h2>{this.state.users.email}</h2>

                
            </div>
        )
    }
}
