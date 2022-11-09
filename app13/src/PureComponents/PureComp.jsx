import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props)
        // console.log("Hello from Pure Component")
    
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
