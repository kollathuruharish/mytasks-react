import { Component } from "react"

export default class Harish extends Component{

constructor(){
    super()
    this.state={
        message:"Popup message",
        Candiate:{
            id:"01",
            name:"Rakesh",
            course:"MPC",
            cutoff:"152"
        },
        Students:["Vijay","Balaji","Sadhik","Hari"]
    }
}
render(){
    return(
        <div>
            <h2>{this.state.message}</h2>
            <button onClick={()=>{this.setState({message:"digit number changes"})}}>change</button>
            {/* <ul>
                <li>Candiate ID:{this.state.Candiate.id}</li>
                <li>Candiate Name:{this.state.Candiate.name}</li>
                <li>Candiate Course:{this.state.Candiate.course}</li>
                <li>Candiate Cutoff:{this.state.Candiate.cutoff}</li>
            </ul> */}
            <ul>
                {this.state.Students.map((Student)=>{
                    return <li>{Student}</li>
                })}
            </ul>
        </div>
    )
}
}