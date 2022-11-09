import React, { Component } from 'react';
import { HOC } from './HOC';

 class ClickCounter extends Component {
    
    render() {
        // let {handleCount,count}=this.props;
        return (
            <div>
                <button onClick={this.props.handleCount}>Click</button>
                <h1>You Clicked {this.props.count} times </h1>
            </div>
        );
    }
}
export default HOC(ClickCounter);
