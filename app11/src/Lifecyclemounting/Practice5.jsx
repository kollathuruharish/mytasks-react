import React, { Component } from 'react'
import Conditioncompound from './Conditioncompound';

export default class Practice5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 1,
          };
          console.log("I am from Constructor ")
        }
      
        static getDerivedStateFromProps(state,props){
          console.log("I am from getDerivedStateFromProps" , state,props)
          return null
        }
      
        changeCount = () => {
          this.setState({ count: this.state.count + 1 });
        };
      
        componentDidMount(){
            console.log("I am from Component Did Mount")
        }
    
        render() {
            console.log("I am from Render")
          return (
            <div>
              <h2>Hello from React js</h2>
              <button onClick={this.changeCount}>Change Count</button>
              {this.state.count < 3 && <Conditioncompound/>}
            
            </div>
          );
        }
      }