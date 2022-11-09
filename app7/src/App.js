import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Harish } from './Harish';
import { Kalyan,Product } from './Kalyan';
import Sample from './Sample';

function App() {
  const [Define,setDefine]=useState(false);
  const [user,setuser]=useState(false)
  const [Item,setItem]=useState(false)
  
  return (
    <div className="App">
      <button onClick={()=>{setDefine(true)}}>Show</button>
      {Define && <Harish/>}
      <hr/>
      <button onClick={()=>{setuser(!user)}}>{user ?"Hide user":"user"}</button>
      {user && <Kalyan/>}
      <hr/>
      <button onClick={()=>{setItem(true)}}>Click</button>
      {Item && <Product/>}
      <hr/>
      <Sample/>
     
    </div>
  );
}

export default App;
