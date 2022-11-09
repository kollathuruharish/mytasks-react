import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import ChildInfo from './ChildInfo';
import Parent from './Parent';
import Sample2 from './Sample2';
import ParentCom from './ParentCom';

function App() {
  // const [allUsers,setallUsers]=useState([])

  // const getUsersFromChild=(users)=>{
  //   setallUsers(users)
  // }
  // return (
  //   <div className="App">
  //     <ul>
  //       {allUsers.map((user,i)=>{
  //         return <li key={i}>{user}</li>
  //       })}
  //       </ul>
  //    <ChildInfo receiveData={getUsersFromChild}/>

  //   </div>
  // );

  return(
    <div className="App">
      <Parent/>
      <Sample2/>
      
      </div>
  )
}

export default App;
