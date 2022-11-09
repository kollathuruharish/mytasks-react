import React, { Component } from 'react'

export default class Childcomp extends Component {
    showWelcomeMessage=()=>{
        alert("I am from Childcomp Component")
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
