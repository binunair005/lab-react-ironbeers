import React, { Component } from 'react'
import axios from 'axios';
import Header from '../Header';

export default class BeerDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoading: true,
            beer:[]
        }
    }
    getBeer(){
        let id = this.props.match.params.id
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/`+id)
        .then(response => {
            this.setState({
                isLoading: false,
                beer:response.data
            })
        })
    }

    componentDidMount(){
         this.getBeer()
    }
  render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>
      }
    return (
        
      <div>
             <Header/>
          <img src={this.state.beer.image_url} style={{ height:100}}/>
          <h1>{this.state.beer.name}</h1>
          <p>{this.state.beer.tagline}</p>
          <h2>{this.state.beer.first_brewed}</h2> 
          
      </div>
    )
  }
}




