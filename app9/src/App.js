
import './App.css';
import users from './users.json'
import Users1 from './Users1.json'
import { Candiates } from './Candiates'
import { Employees } from './Employees'

function App() {
  console.log(users)
  console.log(Users1)
  return (
    <div className="App">
      <Candiates allCandiates={users}/>
      <Employees allEmployees={Users1}/>

      
    </div>
  );
}

export default App;
