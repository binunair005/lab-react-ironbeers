import React, { Component } from 'react'

import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../Header';

export default class Beers extends Component {
    constructor(props){
        super(props);
        this.state={
            beers: []
        }
    }
    componentDidMount(){
        axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
        .then(res => {
            
            this.setState({beers:res.data});
        })
    }
  render() {
    return (
      <div>
             <Header/>
          <h1>Beers</h1>
       
          
          {this.state.beers.map((b,i)=>(
              <div key={b._id}>
              <img src={b.image_url} alt={b.name} style={{ height:50}}/>
              <Link to={'/beers/'+b._id}>{b.name}</Link>
              </div>
          ))}
        
      </div>
    )
  }
  


}

