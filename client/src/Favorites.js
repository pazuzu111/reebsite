import React, { Component } from 'react';

export default class Favorites extends Component {
    constructor(){
    super()
        this.state = {
            favorites: null,
            likesLoaded: false,
        }
    }


    componentDidMount(){

        //get all Favorites
        getFavorites(){
            fetch('')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    favorites: res,
                    likesLoaded: true
                })
            })
        }
    }

    render(){
      return(

          {this.state.likesLoaded ?
              props.favorites.map((x, i) {
                  <h1 key={i}> {x.favorites} </h1>
              })
          }
      )
    }

  }
