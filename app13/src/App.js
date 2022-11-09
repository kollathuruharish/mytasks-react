import logo from './logo.svg';
import './App.css';
import Parentcomp from './References/Parentcomp';
import ComponentContainer from './PureComponents/ComponentContainer';

function App() {
  return (
    <div className="App">
      {/* <Parentcomp/> */}
      <ComponentContainer/>
    </div>
  );
}

export default App;
