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
        fetch(``)
        .then(res=>res.json())
        .then(res=> {
            this.setState({
                beerList: res.data,
                dataLoaded:true
            })
        })
    }

    componentDidMount(){

        //get all beer stlyes
        getStyles(){
            fetch('')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    styleList: res.data,
                    dataLoaded: true
                })
            })
        }
    }

  render() {
    return (
      <div className="App">
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            // <Route exact path="/" component={Home} />
            // <Route exact path="/beer"
            //   render={() => <BeerController currentPage="index" />}
            // />
            // <Route exact path="/new" render={() => (<BeerController currentPage="new" />)} />
            // <Route exact path="/beer/edit/:id"
            //   render={props => (<BeerController
            //     currentPage="edit" currentId={props.match.params.id} />)}
            // />
            // <Route exact path="/beer/:id"
            //   render={props => (<BeerController
            //     currentPage="show" currentId={props.match.params.id} />)}
            // />

            <Beerstyle styleList={this.state.styleList} beerOnCLick={this.beerOnCLick} dataLoaded={this.state.dataLoaded}/>
            <Beerlist beerList={this.state.beerList} dataLoaded={this.state.dataLoaded} />

          </div>
          <Footer />
        </div>
      </Router>

      </div>
    );
  }
}

