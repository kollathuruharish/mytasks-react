import React,{ Component } from 'react';
import './App.css';
import Lifecyclecomp from './components/LifecycleComp';
// import Lifecyclecompchild from './components/Lifecyclecompchild';
class App extends Component{
  render(){
  return (
    <div className="App">
    <Lifecyclecomp />
    </div>
  );
}
}

export default App;
