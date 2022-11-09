import React, { Component } from 'react'
import { HOC } from './HOC';

 class HoverCounter extends Component {
    
    render() {
        // console.log("this.props")
        // let {handleCount,count}=this.props;
        return (
            <div>
                <h1 onMouseOver={this.props.handleCount}>You Hover{this.props.count} times</h1>
            </div>
        );
    }
}
export default HOC(HoverCounter)
