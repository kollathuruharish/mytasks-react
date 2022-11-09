import logo from './logo.svg';
import './App.css';
import Students from './redux/actions/Students';
import Products from './redux/actions/Products';
import Items from './redux/actions/reducer/Items';
import Image from './redux/actions/reducer/Image';

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Students/>
      <Products/>
      <Items/>
      <Image/>
    </div>
  );
}

export default App;
