import { Component } from "react";
import Harish from "./Harish";

export default class User extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome to user  component",
            employee:{
                id:"si2456",
                name:"Ganesh",
                email:"ganesh2006@gmail.com",
                mobile:7493462109
            },
            employees:["Lokesh","Sai","Hari","Sadik"]
        }
    }
    render(){
        return(
            <div>
                <h2>welcome to user component</h2>
                <Harish employeeInfo={this.state.employee}
                message= {this.state.message}
                arr={this.state.employees}
                />
            </div>
        )
    }
}