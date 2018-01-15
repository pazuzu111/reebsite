import React, { Component } from 'react';

export default class Favorites extends Component {
    constructor() {
    super()
        this.state = {
          favorites: [],
          likesLoaded: false
        }
    }

    getFavorites = () => {
      fetch('/api/beer')
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({
          favorites: res.data,
          likesLoaded: true,
        })
      }).catch(err => console.log(err));

    }

    componentDidMount() {
      //get all Favorites
      this.getFavorites()
    }

    deleteFav = (id) => {
      fetch(`/api/beer/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(res => {
        this.getFavorites()
      })
    }

    render() {
        return (
            <div className="favs">
              <h1>🍻🍻 Favorite Beers 🍻🍻</h1>
                {this.state.likesLoaded ?
                    this.state.favorites.beer.map((x, i) => {
                        return (
                            <div key={i}>
                                <h3> {x.brewid} </h3>
                                <button className="delete" onClick={() => this.deleteFav(x.id)}>Delete</button>
                            </div>
                        )
                    })
                    :
                    <p>loading</p>
                }
            </div>
        )
    }
}
