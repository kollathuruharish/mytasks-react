import { Component } from "react"

export default class Lokesh extends Component{
      constructor(){
        super()
        this.state={
            message:"Hello Google",

            Employee:{
                 empId:"TR0850",
                 empname:"Harish",
                 Designation:"Associate"
            }, 
            RemainingEmployees:["Lokesh","Mohan","Saran","Yogesh"]
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <ul>
                    <li>Employee ID:{this.state.Employee.empId}</li>
                    <li>Employee Name:{this.state.Employee.empname}</li>
                    <li>Employee Designation:{this.state.Employee.Designation}</li>
                </ul>
                <ul>
                    {this.state.RemainingEmployees.map((RemainingEmployee)=>{
                        return <li>{RemainingEmployee}</li>
                    })}
                </ul>
            </div>
           
            )
    }
      }
      