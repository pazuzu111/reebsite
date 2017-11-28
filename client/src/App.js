import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Beerstyle from './Beerstyle';
import Beerlist from './Beerlist';
import Favorites from './Favorites'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      styleList: null,
      dataLoaded: false,
      dataLoaded2: false,
      beerList: null
    }
    this.beerOnClick = this.beerOnClick.bind(this)
    this.getStyles = this.getStyles.bind(this)
  }

    componentDidMount(){
      //get all beer stlyes
      this.getStyles();
    }

    //on click fetch specific style beers
    beerOnClick(id){
      fetch(`https://api.brewerydb.com/v2/beers?key=4aa4b1906564a0a282453e69a7eeaf9a&styleId=${id}`)
      .then(res=>res.json())
      .then(res=> {
        this.setState({
          beerList: res.data,
          dataLoaded2: true
        })
      })
    }


    getStyles() {
      fetch('https://api.brewerydb.com/v2/styles?key=4aa4b1906564a0a282453e69a7eeaf9a')
      .then(res => res.json())
      .then(res => {
        this.setState({
          styleList: res.data,
          dataLoaded: true
        })
      })
    }

  render() {
    return (
      <div className="App">
        <div className="App">
          <div className="container">
            <Favorites/>
            <div className="scrollContainer">
            {this.state.dataLoaded ?
            this.state.styleList.map((x, i) => {
            return (
              <h1 key={i}  onClick={() => this.beerOnClick(this.state.styleList[i].id)}> {this.state.styleList[i].name} </h1>
              )
            })
            :
            <p> Loading... </p>}
      </div>
            <Beerlist beerList={this.state.beerList} dataLoaded={this.state.dataLoaded2} />
          </div>
          <Footer />
        </div>

      </div>
    );
  }
}

