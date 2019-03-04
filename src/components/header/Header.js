import * as React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

// import logoNav from './logoNav.png';
 

class Header extends React.Component{
    
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
   
    render() {
        return (
            <Router>
            
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">RemisApp</a>
            </nav>
               
            </Router>
          

               


            
        )
    }
}

export default Header;