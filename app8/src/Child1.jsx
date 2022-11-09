import { Component } from "react";

export default class Child1 extends Component{
    // step1
    constructor(props){
        super(props)
        this.state={
            users:["Firstname","lastname","email"]
        }
    }
    render(){
        return(
            <div>
                {/* step5 */}
                {/* <button onClick={this.props.recieveData(this.state.users)}>show users</button> */}
                <button onClick={this.props.recieveData(this.state.users)}>send me</button>
            </div>
        )
    }
}