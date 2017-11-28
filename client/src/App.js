import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Beerstyle from './Beerstyle';
import Beerlist from './Beerlist';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      styleList: null,
      dataLoaded: false,
      beerList:null
    }
    this.beerOnCLick = this.beerOnCLick.bind(this)
  }

    //on click fetch specific style beers
    beerOnCLick(id){
      fetch(`http://api.brewerydb.com/v2/categories?key=cfd6716e795d949050644dde3a5f62f1&categoryId=${id}`)
      .then(res=>res.json())
      .then(res=> {
        this.setState({
          beerList: res.data,
          dataLoaded:true
        })
      })
    }

    getStyles() {
      fetch('http://api.brewerydb.com/v2/categories?key=cfd6716e795d949050644dde3a5f62f1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          styleList: res.data,
          dataLoaded: true
        })
      })
    }

    componentDidMount(){
      //get all beer stlyes
      this.getStyles;
    }

  render() {
    return (
      <div className="App">
      <Router>
        <div className="App">
          <Header />
          <div className="container">

            <Beerstyle styleList={this.state.styleList} beerOnCLick={this.beerOnCLick} dataLoaded={this.state.dataLoaded} />
            <Beerlist beerList={this.state.beerList} dataLoaded={this.state.dataLoaded} />

          </div>
          <Footer />
        </div>
      </Router>

      </div>
    );
  }
}

