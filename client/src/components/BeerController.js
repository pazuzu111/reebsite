import React, { Component } from 'react';

import BeerList from './BeerList';
import BeerSingle from './BeerSingle';
import BeerForm from './BeerForm';

import { Link, Redirect } from 'react-router-dom'

export default class BeerController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      currentId: props.currentId || null,
      dataLoaded: false,
      allBeers: null,
      currentBeer: null,
      fireRedirect: false,
      redirectPath: null,
    }
    this.beerSubmit = this.beerSubmit.bind(this);
    this.beerDelete = this.beerDelete.bind(this);
  }

  componentDidMount() {
    if (this.state.currentPage === 'index') {
      fetch('/api/beer')
        .then(res => res.json())
        .then(res => {
          this.setState({
            allBeers: res.data.beer,
            dataLoaded: true,
          });
        }).catch(err => console.log(err));
    } else if (this.state.currentPage === 'show' || this.state.currentPage === 'edit') {
      fetch(`/api/beer/${this.state.currentId}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            currentBeer: res.data.beer,
            dataLoaded: true,
          })
        }).catch(err => console.log(err));
    } else if (this.state.currentPage === 'new') {
      this.setState({
        dataLoaded: true,
      })
    }
  }

  beerSubmit(method, event, data, id) {
    event.preventDefault();
    fetch(`/api/beer/${id || ''}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(res => {
        this.setState({
          fireRedirect: true,
          redirectPath: `/beer/${res.data.beer.id}`,
        })
      });
  }

  beerDelete(id) {
    fetch(`/api/beer/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
          redirectPath: '/beer',
        });
      }).catch(err => console.log(err));
  }

  decideWhichToRender() {
    switch (this.state.currentPage) {
      case 'index':
        return <BeerList allBeers={this.state.allBeers} />;
        break;
      case 'show':
        return <BeerSingle beer={this.state.currentBeer} beerDelete={this.beerDelete} />;
        break;
      case 'new':
        return <BeerForm isAdd={true} beerSubmit={this.beerSubmit} />;
        break;
      case 'edit':
        return <BeerForm isAdd={false} beerSubmit={this.beerSubmit} beer={this.state.currentBeer} />
        break;
      default:
        return <Redirect push to="/beer" />;
        break;
    }
  }

  render() {
    return (
      <div className="container">
        {(this.state.dataLoaded) ? this.decideWhichToRender() : <p>Loading...</p>}
        {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
      </div>
    )
  }
}

