import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [expandNav, setExpandNav] = useState(false);

    const location = useLocation();   
    useEffect(() => {
      setExpandNav(false);
    },  [location]);

  return (
    <div className='navbar' id={expandNav ? "open" : "close"}> 
      <div className='toggleButton'> 
       <button onClick={() => {setExpandNav((prev) => !prev)}}>
        <FontAwesomeIcon icon={faBars} />
        </button>
    </div>  
    
    <div className='links'>
        <Link to="Home"> Home </Link>
        <Link to="/"> About </Link>
        <Link to="/Contact"> Contact </Link>
        <Link to="/Portfolio"> Portfolio </Link>

    </div>
    </div>
  )
}

export default Navbar;
