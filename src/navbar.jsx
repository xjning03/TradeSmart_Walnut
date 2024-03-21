import React, { useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const distanceFromTop = navbar.offsetTop;
      const navbarHeight = navbar.offsetHeight; 
  
      if (window.pageYOffset >= distanceFromTop) {
          navbar.classList.add('fixed');
          document.body.style.paddingTop = navbarHeight + 'px'; 
      } else {
          navbar.classList.remove('fixed');
          document.body.style.paddingTop = 0; 
      }
  };  

    return (
        <nav className="navbar">
            <a><NavLink activeClassName='active' to="/Home">Home</NavLink></a>
            <a><NavLink activeClassName='active' to="/Personalised">Personalised</NavLink></a>
            <a><NavLink activeClassName='active' to="/News">News</NavLink></a>
            <a><NavLink activeClassName='active' to="/Education">Educational Resources</NavLink></a>
            <a><NavLink activeClassName='active' to="/Report">Report Fraud</NavLink></a>
        </nav>
    );
}

export default Navbar;
