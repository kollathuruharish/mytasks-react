import React, { Component } from 'react'


export default class User extends Component {
    constructor(){
        super()
        this.state={
            message:"hello from User Component",
            user:{
                fname:"Harish",
                lname:"Kumar",
                email:"harish1231@gmail.com"
            },
            friends:["Lokesh","Kalyan","Sai","Hari"]
        }
    }
    render(){
        return <div>
            <h2>{ this.state.friends}</h2>
            <h2>Hello </h2>

            <ul>
                <li>First Name:{this.state.user.fname}</li>
                <li>Last Name:{this.state.user.lname}</li>
                <li>Email:{this.state.user.email}</li>
            </ul>
            <hr/>
            <ul>
                {this.state.friends.map((friend)=>{
                    return <li>{friend}</li>
                })}
                </ul>

        </div>
        
    }
}