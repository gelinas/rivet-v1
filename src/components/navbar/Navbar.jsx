import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//styles
import './navbar.scss'

export default function Navbar() {

  // state for mobile navigation menu display
  const [displayNav, setDisplayNav] = useState(false);

  // create a ref for manipulating the bulma nav-menu node
  const menuEl = useRef(null);
  const burgerEl = useRef(null);

  // open the display of the menu in mobile 
  const openMenu = () => {
    menuEl.current.classList.add('is-active');
    setDisplayNav(true);
  };

  // close the display of the modal 
  const closeMenu = () => {
    menuEl.current.classList.remove('is-active');
    setDisplayNav(false);
  };

  // menu hamburger toggles the display of the mobile nav-menu 
  const burgerClickHandler = () => {
      displayNav ? closeMenu() : openMenu() 
  };

  // click handler for clicks outside of menu to close menu
  const handleClickOutside = e => {
    if (menuEl.current.contains(e.target) | burgerEl.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    closeMenu();
  };

  // create and clean up event listeners for clicks outside
  useEffect(() => {
    // add event listener when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // return function to clean up event listener when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

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
          ref={burgerEl}
          className="navbar-burger"
          aria-label="menu" 
          onClick={() => burgerClickHandler()}
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
              className='color_shark has-text-weight-bold is-size-5'
              to="/profiles"
              onClick={() => closeMenu()}
            >
              <div className="nav_link has-text-right-mobile">
                Profile List
              </div>
            </Link>
          </div>
          <div className="navbar-item">
            <Link 
              className='color_shark has-text-weight-bold is-size-5'
              to="/newprofile"
              onClick={() => closeMenu()}
            >
              <div className="nav_link has-text-right-mobile">
                Add Employee
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
