import React, { Component } from 'react';

export default class Favorites extends Component {
    constructor(props){
    super(props)
        this.state = {
            favorites: [],
            likesLoaded: false,
        }
    }

      getFavorites() {
        fetch('/api/beer')
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            favorites: res.data,
            likesLoaded: true,
          })
        })
      }

    deleteFav (id) {
      fetch(`/api/beer/${id}`, {
        method: 'DELETE',
      }).then(res => res.json())
        .then(res => {
          this.getFavorites()
        })
    }

    componentDidMount(){
      //get all Favorites
      this.getFavorites()
    }

    render() {
      console.log("state favorites")
      console.log(this.state.favorites)
      return(
        <div className="favs">
          {this.state.likesLoaded ?
              this.state.favorites.beer.map((x, i) => {
                return (
                  <div key={i}>
                    <h1> {x.brewid} </h1>
                    <button className="delete" onClick={() => this.deleteFav(x.id)}>Delete</button>
                  </div>
                )
              })
              :
              <p>loading</p>}
        </div>
      )}
  }
