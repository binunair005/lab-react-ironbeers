import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header'
import {Link} from 'react-router-dom';

export default class RandomBeer extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLoading: true,
            beer: []
        }
    }
    getBeer(){
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(response=>{
            this.setState({
                isLoading: false,
                beer:response.data[0]
            })
        })
    }

   componentDidMount(){
       this.getBeer()
   }

   componentDidUpdate(prevProps, prevState) {
    // We call this.getBeer() only when we have to
    if (this.state.isLoading && !prevState.isLoading) {
      this.getBeer()
    }
  }

  handleClick(){
      this.setState({
          isLoading:true
      })
  }
  render() {
    return (
        
      <div>
          <Header/>
        <img src={this.state.beer.image_url}/>
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.tagline}</p>
        <h2>{this.state.beer.first_brewed}</h2>
        <h2>{this.state.beer.attenuation_level}</h2>
        <p>{this.state.beer.description}</p>
        <h3>{this.state.beer.contributed_by}</h3>
        <Link to='/random-beer' onClick={this.handleClick.bind(this)}>get another beer</Link>

      </div>
    )
  }
}



