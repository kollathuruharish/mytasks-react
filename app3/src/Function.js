import { Component } from "react"

export default function Function(){
    return (
        <div>
            <h2>Hello Function Component</h2>
        </div>
    )
}


export const Function1=()=>{
    return (
        <div>
            <h2>Hello Arrow Function Component</h2>
        </div>
    )
}

export class Function2 extends Component{
    render(){
        return(
            <h2>Hello class Component</h2>
        )
    }
}