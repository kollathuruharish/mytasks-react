import logo from './logo.svg';
import './App.css';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import { ContainerComp } from './Context/Context1/ContainerComp';
// import { CompContainer } from './RenderProps/CompContainer';

function App() {
  return (
    <div className="App">
      {/* <ClickCounter/>
      <hr/>
       <HoverCounter/> */}
      {/* <CompContainer/> */}
      <ContainerComp/>
    </div>
  );
}

export default App;
