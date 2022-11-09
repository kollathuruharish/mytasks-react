import { Component } from "react"


export  class Raju extends Component{

constructor(){
    super()
    this.state={
        greeting:"Good Evening",
        user:{
            fname:"Rakesh",
            lname:"Kumar",
            email:"rajesh21@gmail.com"

        },
        employees:["Vijay","Balaji","Sadhik","Hari"]
    }
}
render(){
    return(
        <div>
            <h2>{this.state.greeting}</h2>
            <button onClick={()=>{this.setState({greeting:"Introduction of React"})}}>change</button>
            {/* <ul>
                <li>User fName:{this.state.user.fname}</li>
                <li>User lName:{this.state.user.lname}</li>
                <li>Email:{this.state.user.email}</li>
            </ul> */}
            <ul>
                {this.state.employees.map((employee)=>{
                    return <li>{employee}</li>
                })}
            </ul>
        </div>
    )
}
}