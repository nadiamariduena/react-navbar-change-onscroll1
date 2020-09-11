import React, { useState } from "react";
import { Link } from "react-router-dom";

//
// If you want to see the explanation of most of the functions,
// click on the image in the readme of this project
//
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // to close mobile
  const closeMobileMenu = () => setClick(false);

  //
  //

  /*
  
  
  
  */
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FLUXY
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* 
          


          */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* 
          

          
          */}
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* 
          


          */}
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

/*


// type the following if you have the react snippets: rfce
//
//    THE Link is going to replace the a tag 
// https://www.npmjs.com/package/@fortawesome/react-fontawesome
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // to close mobile
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            FLUXUS <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
         
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                to="/Products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
         
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;





*/
