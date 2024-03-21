import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    const distanceFromTop = navbar.offsetTop;
    const navbarHeight = navbar.offsetHeight;

    if (window.pageYOffset >= distanceFromTop) {
      navbar.classList.add("fixed");
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      navbar.classList.remove("fixed");
      document.body.style.paddingTop = 0;
    }
  };

  return (
    <nav className="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/Personalised">Personalised</Link>
      <Link to="/News">News</Link>
      <Link to="/Education">Educational Resources</Link>
      <Link to="/Report">Report Fraud</Link>
    </nav>
  );
}

export default Navbar;
