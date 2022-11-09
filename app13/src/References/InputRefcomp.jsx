import React, { Component } from 'react'
import Childcomp from './Childcomp'

export default class InputRefcomp extends Component {
    constructor(props) {
        super(props)
    
        this.ref = React.createRef()
        this.childcomp=React.createRef()
             
        
    }
    handleWelcome=()=>{
        this.InputRefcomp.current.showWelcomeMessage()
    }
    
    render() {
        return (
            <div>
                <h1>Childcomp</h1>
                <input type="text" ref={this.ref} />
                <button onClick={this.handleWelcome}>Show Welcome</button>
                <Childcomp ref={this.childcomp}/>
            </div>
        )
        
    }
    componentDidMount(){
        this.ref.current.focus()
    }
}
