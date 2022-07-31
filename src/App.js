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
import { useState } from 'react';
function App() {
  const [cursorX,setcursorX] = useState();
  const [cursorY,setcursorY] = useState();
  window.addEventListener('mousemove',(e)=>{
    setcursorX(e.pageX)
    setcursorY(e.pageY)
  })
  const [mode,setmode] = useState('dark');
  const [toggleSm,settoggleSm] = useState('sun');
  const toggleMode = ()=>{
    if(mode==='dark' && toggleSm==='sun'){
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      settoggleSm('moon');
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      settoggleSm('sun');
    }
  }

  return (
    <>
    <Router>
        <div className='cursor' style={{
          left:cursorX + 'px',
          top:cursorY + 'px'
        }}></div> 
        <Navbar mode={mode} toggleMode={toggleMode} toggleSm={toggleSm}/>
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
