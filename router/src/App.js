import { BrowserRouter,Routes, Route,Link } from "react-router-dom";
// import { About } from "./About";
import { Home } from "./Home";
import { Users } from "./Users";
import './css/style.default.css';
import './css/custom.css';
import { Header } from "./Components/Header";
import { Slider } from "./Components/Slider";
import { About } from "./Components/About";
import { Expertise } from "./Components/Expertise";
import { Education } from "./Components/Education";
import { Experience } from "./Components/Experience";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div>

      <Header/>
      <Slider/>
      <About/>
      <Expertise/>
      <Education/>
      <Experience/>
      <Contact/>
      <Footer/>
    
      {/* <BrowserRouter>
      <Link to="/">Home</Link> ||
       <Link to="about">About</Link>


        <Routes>
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="" element={<Home />} />
       </Routes>
     </BrowserRouter> */}
    </div>

  );
}

export default App;
