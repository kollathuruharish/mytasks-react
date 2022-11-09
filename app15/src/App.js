import logo from './logo.svg';
import './App.css';
import Hover from './HigherOrderComponent1/Hover';
// import Image from './HigherOrderComponent/Image';
import Message from './HigherOrderComponent1/Message';
import Sample1 from './References/Sample1';
import Sample2 from './References/References1/Sample2';

function App() {
  return (
    <div className="App">
      {/* <Image/> */}
      {/* <Hover/>
      <Message/> */}
    {/* <Sample1/> */}
    <Sample2/>
    </div>
  );
}

export default App;
