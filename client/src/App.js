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
      dataLoaded2: false,
      beerList: null
    }
    this.beerOnCLick = this.beerOnCLick.bind(this)
    this.getStyles = this.getStyles.bind(this)
  }

    componentDidMount(){
      //get all beer stlyes
      this.getStyles();
      console.log("styles")
      console.log(this.state.styleList)
    }

    //on click fetch specific style beers
    beerOnCLick(id){
      fetch(`https://api.brewerydb.com/v2/beers?key=3bc036cfce2c67f3aa2a2ac4c893cb41&styleId=${id}`)
      .then(res=>res.json())
      .then(res=> {
        console.log("clickres")
        console.log(res)
        this.setState({
          beerList: res.data,
          dataLoaded2: true
        })
      })
    }


    getStyles() {
      fetch('https://api.brewerydb.com/v2/styles?key=3bc036cfce2c67f3aa2a2ac4c893cb41')
      .then(res => res.json())
      .then(res => {
        console.log("stylesres")
        console.log(res)
        this.setState({
          styleList: res.data,
          dataLoaded: true
        })
      })
    }

  render() {
    return (
      <div className="App">
      <Router>
        <div className="App">
          <Header />
          <div className="container">

            <Beerstyle styleList={this.state.styleList} beerOnClick={() =>this.beerOnCLick} dataLoaded={this.state.dataLoaded} />
            {this.state.dataLoaded2 ? (
            <Beerlist beerList={this.state.beerList} dataLoaded={this.state.dataLoaded2} />
            ) : (<p>Loading</p>
            )}

          </div>
          <Footer />
        </div>
      </Router>

      </div>
    );
  }
}

