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
                  <h1 key={i}> {x.brewid} </h1>
                )
              })
              :
              <p>loading</p>}
        </div>
      )}
  }
