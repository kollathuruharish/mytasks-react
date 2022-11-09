import React, { Component } from 'react'
import Practicechild1 from './Practicechild1'

export default class Practice1 extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            count:0
        }


    }
    static getDerivedStateFromProps(props,state){
        console.log("Hello from getDerivedStateFromProps",props,state)
        return null
    }
    // componentDidMount(){
    //     console.log("Hello from componentDidMount from parent")
    // }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        // console.log("Hello from render Parent")
        return (
            <div>
                <button onClick={this.increment}>Increment count</button>
                <Practicechild1 count={this.state.count}/>
            </div>
        )
    }
}
