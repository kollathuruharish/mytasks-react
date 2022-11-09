import { Component } from "react"

export  function Function(){
    return (
        <div id="myDiv">
            <h2>Hello Function Component</h2>
        </div>
    )
}


export const Function1=()=>{
    return (
        <div id="content"
        style={{width:'500px',background:'green',margin:'10px',border:'2px solid ',height:'200px'}}>
            <h2>Hello Arrow Function Component</h2>
        </div>
    )
}

export class Function2 extends Component{
    render(){
        let myStyles={
            background:'red',
            width:'500px',
            height:'200px',
            border:'1px solid',
            margin:'10px'
        }
        return(
            <div style={myStyles}>
                <h2>Hello class Component</h2>
            </div>
            
        )
    }
}