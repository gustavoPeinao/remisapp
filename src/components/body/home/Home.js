import * as React from 'react';

import {  MDBCol } from "mdbreact";


import { choferes } from '../../../choferes.json'

class Home extends React.Component {
  
  constructor(){
    super();
    this.state ={
      choferes,
      nameValue:''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(x){
    console.log(x.target.value);
    // this.setState(term)=x.target.value;
    [x.target.name]= x.target.value;
  }
  
    render() {   
    // const x = (nombrex.target.value)
    // console.log(x)
      return (
        <div>
          <MDBCol md="3">
            <h2>Lista de choferes</h2>
            <input className="form-control" onChange={this.onChange} type="text" name="nameValue" placeholder="Buscar chofer" aria-label="Search" />
            
              {choferes.map((chofer, i) => {
                return <div>
                    <p>
                      {chofer.nombre}
                    </p>
                  </div>
              })}
          </MDBCol>
        </div>         
        );
    }
}

export default Home;