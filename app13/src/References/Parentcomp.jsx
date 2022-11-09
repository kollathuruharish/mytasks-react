import React, { Component } from 'react'
import InputRefcomp from './InputRefcomp'

export default class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
    
    }
    
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <InputRefcomp/>
            </div>
        )
    }
}
