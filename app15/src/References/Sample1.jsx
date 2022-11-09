import React, { Component } from 'react'

export default class Sample1 extends Component {
    constructor(props) {
        super(props)
    
        this.ref=React.createRef()
        this.inputref=React.createRef()
    }
    handleClick=()=>{
        alert(this.inputref.current.value)
    }
    
    render() {
        return (
            <div>
                <h1>References</h1>
                <button onClick={this.handleClick}>Click</button>
                <hr />
                <input type="text" ref={this.ref} />
                <hr />
                <input type="text" ref={this.inputref} />
            </div>
        )
    }
    componentDidMount(){
        this.ref.current.focus()
        this.inputref.current.focus()
    }
}
