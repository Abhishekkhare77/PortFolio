import React from 'react'

const Navbar = (props) => {
  
  return (
    <nav style={{color:props.mode==='light'?'black':'white'}}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <i className={`fa-solid fa-${props.toggleSm} modeChanger`} onClick={props.toggleMode}></i>
        <div className="mobile">
          <a href="/"><i class="fa-solid fa-house"></i></a>
          <a href="/about"><i class="fa-solid fa-address-card"></i></a>
          <a href="/skills"><i class="fa-solid fa-lightbulb"></i></a>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
