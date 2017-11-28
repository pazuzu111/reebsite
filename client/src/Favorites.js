import React, { Component } from 'react';

export default class Favorites extends Component {
    constructor(){
    super()
        this.state = {
            favorites: null,
            likesLoaded: false,
        }
    }

    render(){
      return(
          this.state.likesLoaded ?
              this.state.favorites.map((x, i) => {
                  <h1 key={i}> {x.favorites} </h1>
              })
              :<p>loading favs</p>

      )
    }

  }
