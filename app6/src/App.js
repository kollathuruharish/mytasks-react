import Harish from './Harish';
import './App.css';
import { useState } from 'react';
import { Lokesh } from './Lokesh';
import { Chandu } from './Chandu';
import { Raju } from './Raju';

function App() {
  let [Define,setDefine]=useState("welcome to app component")
  
  return (
    <div className="App">
      <Harish/>
      <h2>{Define}</h2>
      <button onClick={()=>{setDefine("hello lokesh component")}}>changing</button>
       <Lokesh/>
       <Chandu/>
       <Raju/>
    </div>
  );
}

export default App;
