import React,{ Component } from "react";
export default class Lifecyclecompchild extends Component{
    constructor(props) {
        super(props)

        this.state={
            person:{
                fname:"harish",
                email:"harish82@gmail",
                location:"vellore"
            }

        };
        console.log('I am constructor child component')

    }
    // static getDerivedStateFromProps(state,props){
    //     console.log('I am from getDerivedStateFromProps',state,props)

    // }
    render(){
        console.log('I am from render component')
        return (
            <div>
                <h2>Hello from Lifecyclecompchild</h2>
                <div>
                    <ul>
                        <li>First: {this.state.person.fname}</li>
                        <li>Email: {this.state.person.email}</li>
                        <li>Location: {this.state.person.location}</li>
                    </ul>
                </div>
            </div>
            
        )
    }
}