import { Component } from "react"

export function Product(){
    return(
        <div id="Header">
            <h2>I am from Product Component</h2>
            <h1>I am from Product2 Component</h1>
        
        </div>
    )
}

export const Tshirt=()=>{
    return(
        <div id="mainDiv" style={{border:'1px solid',background:'red',width:'500px',height:'200px'}}>
            <h2>I am from Tshirt product</h2>

        </div>
    )
}

export class Mobile extends Component{
    render(){
        let mystyle={
            border:'1px solid',
            width:'500px',
            height:'200px',
            color:'yellow',
            background:'red',
            margin:'10px'
        }
        return(
            <div>
               <p style={mystyle}>Enterprise VPN. The speed of Stackblitz behind the security</p>
            </div>
        )
    }

}