import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

//styles
import './navbar.scss'

export default function Navbar() {

  // create a ref for manipulating the bulma nav-menu node
  const menuEl = useRef(null);

  // toggle the display of the mobile nav-menu 
  const [displayNav, setDisplayNav] = useState(false);
  const navClickHandler = () => {
      if (displayNav === false) {
        menuEl.current.classList.add('is-active');
        setDisplayNav(true);
      } else {
        menuEl.current.classList.remove('is-active');
        setDisplayNav(false);
      }
  };

  return (
    <nav
      className='navbar has-background-white is-fixed-top'
    >
      <div className='navbar-brand'>

        {/* display navbar logo on mobile and desktop */}
        <img 
          className='navbar-logo' 
          src="https://www.rivet.work/wp-content/uploads/2019/10/Rivet_Logo_UnionBlue-300x138.png"
          alt="rivet logo"
        />

        {/* display navbar hamburger menu on mobile only */}
        <div 
          className="navbar-burger"
          aria-label="menu" 
          onClick={() => navClickHandler()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* menu displayed on far right in desktop, and hidden dropdown on mobile */}
      <div ref={menuEl} className='navbar-menu'>
        <div className='navbar-end'>
          <div className="navbar-item">
            <Link 
              as="button"
              className='color_shark has-text-weight-bold is-size-5'
              to="/profiles"
              onClick={() => navClickHandler(false)}
            >
              Profile List
            </Link>
          </div>
          <div className="navbar-item">
            <Link 
              as="button"
              className='color_shark has-text-weight-bold is-size-5'
              to="/newprofile"
              onClick={() => navClickHandler(false)}
            >
              Add Employee
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
