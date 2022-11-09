import React, { Component } from 'react'

export default class Sample2 extends Component {
    constructor(props) {
        super(props)
        this.CBRef=null
        this.setCBRef=(element)=>{
            this.CBRef=element
        }
    }
    componentDidMount(){
        if(this.CBRef){
            this.CBRef.focus()
        }
    }
    
    render() {
        return (
            <div>
                <h1>References1</h1>
                <input type="text" ref={this.setCBRef} />
            </div>
        )
    }
}
