
import './App.css';
import { Mobile, Product, Tshirt } from './Product';
import Lokesh from './Lokesh';
import User from './User';
import Users from './Users';
function App() {
  return (
    <div className="App">
      <Product/>
      <Tshirt/>
      <Mobile/>
      <Lokesh/>
      <User/>
      <Users/>
    </div>
  );
}

export default App;
