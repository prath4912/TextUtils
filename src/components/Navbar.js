import React  from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Navbar(props) {
  return (
    <div>
        <header style={props.s1} >
        <h1  >{props.title}</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/">Explore</Link></li> */}
            <li><Link to="/about">Contact</Link></li>
            <li>
            <div className="form-check form-switch">
                <input onClick={props.f1} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue</label>
            </div>   
            <div className="form-check form-switch">
                <input onClick={props.f2} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault1"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Red</label>
            </div>   
            </li>       
          </ul>
        </nav>
      </header>
    </div>
  )
}
