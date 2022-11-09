import React, { Component } from 'react'
import { NormalComponent } from './NormalComponent'
import PureComp from './PureComp'

export default class ComponentContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello from parent component.....",
             count:1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({count:this.state.count+1})
        },2000)
    }
    
    render() {
        return (
            <div>
                <h2>Hello from container component</h2>
                {/* <NormalComponent message={this.state.message} /> */}
                <PureComp message={this.state.message} />
            </div>
        )
    }
}
