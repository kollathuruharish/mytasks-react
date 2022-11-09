import React,{useState} from 'react';


function App() {
  const [search, setsearch] = useState('');

  const submitHandler = e=>{
    e.preventDefault();
    console.log(search);
  }
  return (
    <div>
      <center>
      <h4>Food Recipe App</h4><br />
      <form onSubmit={submitHandler}>
       <input type="text"  value={search} onChange={(e)=>setsearch(e.target.value)}/><br/>
       <input type="submit" value="Search" />
      </form>
      </center>
    </div>
  );
}

export default App;
