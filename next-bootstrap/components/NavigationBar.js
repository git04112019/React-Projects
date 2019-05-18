// import Link from 'next/link';
import Scrollspy from 'react-scrollspy';
import FancyName from './FancyName';
import { 
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';


import React, { Component } from 'react'

export default class NavigationBar extends Component {
  render() {
    const BGcolor = "#000";
    const NavScrollColor = "#e40909";
    const NavItemColor = "#fff";

    
    return (
<div>
  <Scrollspy items={ ['', 'about', 'service', 'blog'] } 
    scrolledPastClassName="navbar-reduce"  
    componentTag='div' 
    className=" " 
    // currentClassName="navbar-reduce"
  >
    <Navbar 
      fixed="top" 
      collapseOnSelect 
      expand="md" 
      bg="dark" 
      variant="dark"
      // className="navbar navbar-b navbar-trans navbar-expand-md fixed-top "
      className="navbar navbar-b navbar-trans "
      >
      <Navbar.Brand href="/"> 
        <FancyName /> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Scrollspy items={ ['', "about"] } 
              scrolledPastClassName="active"  
              componentTag='li' 
              className=" nav-item">
              <Nav.Link href="#about">About</Nav.Link>
            </Scrollspy>
            <Scrollspy items={ ['', "service"] } 
              scrolledPastClassName="active"  
              componentTag='li' 
              className=" nav-item">
              <Nav.Link href="#service">Service</Nav.Link>
            </Scrollspy>
          </Nav>
      </Navbar.Collapse>
    </Navbar> 
  </Scrollspy>

    {/* <Scrollspy items={ ['', 'about', 'service', 'blog'] } 
    scrolledPastClassName="navbar-reduce"  
    componentTag='div' 
    className=" " 
    // currentClassName="navbar-reduce"
    >
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top " id="mainNav">
        <div className="container">
          <a className="navbar-brand " href="#page-top">
            <FancyName />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll " href="#home">Home</a>
              </li>
              <Scrollspy items={ ['', "about"] } scrolledPastClassName="active"  componentTag='li' className=" nav-item">
                <a className="nav-link" href="#about">About</a>
              </Scrollspy>
              <Scrollspy items={ ['', "service"] } scrolledPastClassName="active"  componentTag='li' className=" nav-item">
                <a className="nav-link js-scroll" href="#service">Experiance</a>
              </Scrollspy>
              <Scrollspy items={ ['', "blog"] } scrolledPastClassName="active"  componentTag='li' className=" nav-item">
                <a className="nav-link js-scroll" href="#blog">Blog</a>
              </Scrollspy>
            </ul>
          </div>
        </div>
      </nav>
      </Scrollspy> */}

      <style jsx>{`
.navbar-b {
  transition: all .5s ease-in-out;
  background-color: transparent;
  padding-top: 1.563rem;
  padding-bottom: 1.563rem;
}

.navbar-b.navbar-reduce {
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
  transition: all .5s ease-in-out;
  background-color: ${BGcolor};
  padding-top: 15px;
  padding-bottom: 15px
}

.navbar-b.navbar-trans .nav-item,
.navbar-b.navbar-reduce .nav-item {
  position: relative;
  padding-right: 10px;
  padding-left: 0;
}

.navbar-b.navbar-trans .nav-link,
.navbar-b.navbar-reduce .nav-link {
  color: ${NavItemColor};
  text-transform: uppercase;
  font-weight: 600;
}

.navbar-b.navbar-trans .nav-link:before,
.navbar-b.navbar-reduce .nav-link:before {
  content: '';
  position: absolute;
  margin-left: 0px;
  width: 0%;
  bottom: 0;
  left: 0;
  height: 2px;
  transition: all 500ms ease;
}

.navbar-b.navbar-trans .nav-link:hover,
.navbar-b.navbar-reduce .nav-link:hover {
  color: #1B1B1B;
}

.navbar-b.navbar-trans .nav-link:hover:before,
.navbar-b.navbar-reduce .nav-link:hover:before {
  width: 35px;
}

.navbar-b.navbar-trans .show > .nav-link:before,
.navbar-b.navbar-trans .active > .nav-link:before,
.navbar-b.navbar-trans .nav-link.show:before,
.navbar-b.navbar-trans .nav-link.active:before,
.navbar-b.navbar-reduce .show > .nav-link:before,
.navbar-b.navbar-reduce .active > .nav-link:before,
.navbar-b.navbar-reduce .nav-link.show:before,
.navbar-b.navbar-reduce .nav-link.active:before {
  width: 35px;
}

.navbar-b.navbar-trans .nav-link:before {
  background-color: ${NavItemColor};
}

.navbar-b.navbar-trans .nav-link:hover {
  color: ${NavItemColor};
}

.navbar-b.navbar-trans .show > .nav-link,
.navbar-b.navbar-trans .active > .nav-link,
.navbar-b.navbar-trans .nav-link.show,
.navbar-b.navbar-trans .nav-link.active {
  color: ${NavItemColor};
}

.navbar-b.navbar-reduce {
  transition: all .5s ease-in-out;
  background-color: ${BGcolor};
  padding-top: 15px;
  padding-bottom: 15px;
}

.navbar-b.navbar-reduce .nav-link {
  color: ${NavScrollColor};
}

.navbar-b.navbar-reduce .nav-link:before {
  background-color: ${NavScrollColor};
}

.navbar-b.navbar-reduce .nav-link:hover {
  color: ${NavScrollColor};
}

.navbar-b.navbar-reduce .show > .nav-link,
.navbar-b.navbar-reduce .active > .nav-link,
.navbar-b.navbar-reduce .nav-link.show,
.navbar-b.navbar-reduce .nav-link.active {
  color: ${NavScrollColor};
}

.navbar-b.navbar-reduce .navbar-brand {
  color: ${NavScrollColor};
}

.navbar-b.navbar-reduce .navbar-toggler span {
  background-color: #1B1B1B;
}

.navbar-b .navbar-brand {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
}

.navbar-b .navbar-nav .dropdown-item.show .dropdown-menu,
.navbar-b .dropdown.show .dropdown-menu,
.navbar-b .dropdown-btn.show .dropdown-menu {
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  visibility: visible !important;
}

.navbar-b .dropdown-menu {
  margin: 1.12rem 0 0;
  border-radius: 0;
}

.navbar-b .dropdown-menu .dropdown-item {
  padding: .7rem 1.7rem;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item:hover {
  background-color: #0078ff;
  color: #fff;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item.active {
  background-color: #0078ff;
}

/*--/ Hamburger Navbar /--*/

.navbar-toggler {
  position: relative;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0;
}

.navbar-toggler span {
  display: block;
  background-color: #fff;
  height: 3px;
  width: 25px;
  margin-top: 4px;
  margin-bottom: 4px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  left: 0;
  opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: -webkit-transform .35s ease-in-out;
  transition: transform .35s ease-in-out;
  transition: transform .35s ease-in-out, -webkit-transform .35s ease-in-out;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute;
  left: 12px;
  top: 10px;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  opacity: 0.9;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px;
  visibility: hidden;
  background-color: transparent;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute;
  left: 12px;
  top: 10px;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
  opacity: 0.9;
}
  `}</style>

</div>
    )
  }
}



