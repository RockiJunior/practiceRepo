//dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//style
import "./App.css";
//components
import Home from "./components/Home/Home.jsx";
import About from './components/About/About.jsx';
import Works from './components/Works/Works.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>          
          <Route exact path="/about" element={<About/>}/>          
          <Route exact path="/works" element={<Works/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
