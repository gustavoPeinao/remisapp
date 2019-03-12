import * as React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

// import Body from'../body/Body';
import Header from '../header/Header';
import Home from '../body/home/Home';

// import Ingenieria from '../body/ingenieria/Ingenieria';




class Container extends React.Component {

   
  render() {
    return (
       <div> 
           <div>
                <Header />
            </div>
            <div style={{paddingTop: '30px'}}>
                <HashRouter>
                    <Switch>

                        <Route path="/" component={Home} exact />
                        {/* <Route path="/ingenieria" component={Ingenieria} exact /> */}
                        
                    </Switch>
                </HashRouter>
            </div>
       </div>
    );
  }
}

export default Container;