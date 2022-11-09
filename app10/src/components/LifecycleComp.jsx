import React, { Component } from 'react';
 import Lifecyclecompchild from './Lifecyclecompchild';
export default class Lifecyclecomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: 1,
    };
    console.log('I am from constructor component');
  }
  static getDerivedStateFromProps(state, props) {
    console.log('I am from getDerivedStateFromProps', state, props);
    return null;
  }
  changeaddress = () => {
    this.setState({ address: this.state.address + 1 });
  };
  componentDidMount() {
    console.log('I am from component Did Mount');
  }
  render() {
    console.log('I am Render Component');
    return (
      <div>
        <h2>Hello Lifecyclecomponent</h2>
        <button onClick={this.changeaddress}>Change Address</button>
        <Lifecyclecompchild />
      </div>
    );
  }
}
