import React from 'react';

const Beerstyle = props => {
    return(
      <div className="scrollContainer">
        <h1> styles of beer </h1>
        {props.dataLoaded ?
            props.styleList.map((x, i) => {
            return (
              <h3 key={i} onClick={props.beerOnClick(x[i].id)}> {x[i].name} </h3>
              )
            })
            :
            <p> Loading... </p>}
      </div>
    )
}

export default Beerstyle
