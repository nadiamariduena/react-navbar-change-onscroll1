import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

/*

                At a certain point you will have an error due to not defining
                a Button component, when that happens ,go down where this line is:

                       {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

                       position the mouse at the end of the Button word, the mouse should be blinking 
                       at the end on the n,
                       
                            <Button
                       
                       once its there PRESS Strg+space bar, it will open the options and
                       you should click on the option Button with a kind of rectangle inside, if it worked
                       You should see at the top of the file this:


                       import { Button } from "./Button";



                

*/
function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true); //1 btn

  const handleClick = () => setClick(!click);
  // to close mobile
  const closeMobileMenu = () => setClick(false);

  //
  //
  const showButton = () => {
    //2 BTn
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //3Btn
  window.addEventListener("resize", showButton);
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
          <ul className={click ? "nav-menu active" : "nav-menu"}>



            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
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
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>


          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

          
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
