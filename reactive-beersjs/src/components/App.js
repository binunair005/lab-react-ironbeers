import React, { Component } from 'react';
// import { withRouter } from "react-router";

import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';

import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Error404 from './pages/Error404';



import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
{/* alternative method for header to put in all pages also u have to define withrouter */}
      {/* <Switch>
          <Route exact path="/" render={() => <div></div>} />
          <Route component={Header} />
        </Switch> */}
        
         <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/beers/:id' component={BeerDetails}/>

          <Route exact path='/random-beer' component={RandomBeer}/>
          <Route exact path='/new-beer' componnent={NewBeer}/>
          <Route component={Error404} />
         </Switch>
      </div>
    );
  }
}

export default App;
// export default withRouter(App);
