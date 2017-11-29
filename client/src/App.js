import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Beerlist from './Beerlist';
import Favorites from './Favorites'
import Header from './components/Header'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      styleList: null,
      dataLoaded: false,
      dataLoaded2: false,
      beerList: null,

    }
    this.beerOnClick = this.beerOnClick.bind(this)
    this.getStyles = this.getStyles.bind(this)

  }

    componentDidMount(){
      //get all beer stlyes
      this.getStyles();
    }


      // getFavoritess() {
      //   fetch('/api/beer')
      //   .then(res => res.json())
      //   .then(res => {
      //     console.log(res);
      //     this.setState({
      //       favorites2: res.data,
      //       likesLoaded2: true,
      //     })
      //   })
      // }

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
              <Header/>

          <div className="container">
            <Favorites/>
            <div className="scrollContainer">
              <h1> Styles of beer </h1>

              {this.state.dataLoaded ?
              this.state.styleList.map((x, i) => {
              return (
                <h3 key={i}  onClick={() => this.beerOnClick(this.state.styleList[i].id)}> {this.state.styleList[i].name} </h3>
                )
              })
              :
              <p> Loading... </p>}
            </div>
            <Beerlist beerList={this.state.beerList} dataLoaded={this.state.dataLoaded2}/>
          </div>
          <Footer />
        </div>

      </div>
    );
  }
}

