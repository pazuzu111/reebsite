import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BeerSingle = (props) => {
  return (
    <div>
      <div>
        <div >
          <img src={props.beer.url} alt={props.beer.name} />
        </div>
        <div className="info">
          <h4>{props.beer.name}</h4>
          <h1>{props.beer.brewery}</h1>
          <p>{props.beer.country}</p>
          <p>{props.beer.abv}</p>

          <div className="links">
            <Link to={`/beer/edit/${props.beer.id}`}>Edit</Link>
            <span className="delete" onClick={() => props.beerDelete(props.beer.id)}>Delete</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerSingle;
