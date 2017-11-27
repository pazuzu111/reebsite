import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BeerController from './components/BeerController';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/beer"
              render={() => <BeerController currentPage="index" />}
            />
            <Route exact path="/new" render={() => (<BeerController currentPage="new" />)} />
            <Route exact path="/beer/edit/:id"
              render={props => (<BeerController
                currentPage="edit" currentId={props.match.params.id} />)}
            />
            <Route exact path="/beer/:id"
              render={props => (<BeerController
                currentPage="show" currentId={props.match.params.id} />)}
            />
          </div>
          <Footer />
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
