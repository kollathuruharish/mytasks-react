import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css';
import { Todos } from './Routing/API/Todos';
import { Users } from './Routing/API/Users';

function App() {
  return (
    <div className="App">
     
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Users/>}></Route>
          <Route path="/todos" element={  <Todos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
