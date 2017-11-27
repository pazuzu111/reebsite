import React from 'react';

import { Link } from 'react-router-dom';

const Beer = (props) => {
  return (
    <div>
      <img src={props.Beer.url} />
      <h2>{props.Beer.name}</h2>
      <p>brewery: {props.Beer.brewery}</p>
      <p>country: {props.Beer.country}</p>
      <p>abv: {props.Beer.abv}</p>

      <Link to={`/beer/${props.Beer.id}`}>See More</Link>
    </div>
  )
}

export default Beer;
