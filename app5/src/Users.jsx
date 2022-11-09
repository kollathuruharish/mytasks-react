import { Component } from "react";
import { Lokesh1 } from "./Lokesh1";

export default class Users extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome from the React component",
            person:{
                fname:"Harish",
                lname:"Kumar",
                email:"harish21@gmail.com"
            },
            colleagues:["lokesh","chandu","Hari","Sai"]
        }
    }
    render(){
        return(
            <div>
                <h2>good evening</h2>
                 <Lokesh1
                 message= {this.state.message}
                 object={this.state.person}
                 array={this.state.colleagues}
                 />
            </div>

            )
    }
    
}