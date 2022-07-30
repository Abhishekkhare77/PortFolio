import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Skills from './components/Skills';
function App() {
  return (
    <>
    <Router>
        <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/skills" element={<Skills/>} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
