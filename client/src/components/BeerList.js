import React from 'react';
import Beer from './Beer';

const BeerList = (props) => {
  return (
    <div>
      {props.allBeers.map(beer => {
        return <Beer key={beer.id} beer={beer} />
      })}
    </div>
  );
};

export default BeerList;
