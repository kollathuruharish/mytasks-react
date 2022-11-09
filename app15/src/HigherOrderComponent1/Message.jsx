import React, { PureComponent } from 'react'
import {Sample} from './Sample'

 class Message extends PureComponent {
    render() {
        return (
            <div>
                <button onClick={this.props.handlemessage}>Click</button>
                <h1>You Clicked {this.props.message} times </h1>
            </div>
        )
    }
}
export default Sample(Message)
