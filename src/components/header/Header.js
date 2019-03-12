import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';



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