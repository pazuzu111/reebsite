import React from 'react';
import './App.css';

const Beerstyle = props => {
  console.log("Beerstyle")
  console.log(props)
    return(
      <div className="scrollContainer">
        {props.dataLoaded ?
            props.styleList.map((x, i) => {
            return (
              <h1 key={i}  onClick={props.beerOnClick(props.styleList[i].id)}> {props.styleList[i].name} </h1>
            )})
            :
            <p> Loading... </p>}
      </div>
    )
}

export default Beerstyle
