import * as React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import {  MDBCol } from "mdbreact";
import './home.css'; 


import api from '../../../choferes.json'


function searchingFor(term){
  return function (x){
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
    
  }
}
class Home extends React.Component {
  constructor(props){
    super(props);

      this.state={
        choferes:api,
        term:'',
      }
      this.searchHandler = this.searchHandler.bind(this);
  }
  
  searchHandler(event){
    this.setState({term: event.target.value})
  }

    render() {
      const {term, choferes} = this.state;
      
      
      return (
        
          <div>
            <MDBCol md="6">
              <input className="form-control" type="text" onChange={this.searchHandler} value={term} placeholder="Buscar chofer" aria-label="Search" />
            </MDBCol>
            
              <h2>Lista de choferes</h2>
              {api.choferes.filter(searchingFor(term)).map(chofer => (
                <div key={chofer.id}>
                  <li>
                      <h4>{chofer.nombre}</h4> 
                  </li>
                </div>
              ))}
            
              
            {this.props.choferes}
          </div>
          

               


            
        )
    }
}

export default Home;