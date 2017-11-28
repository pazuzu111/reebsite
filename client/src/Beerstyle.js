import React from 'react';


const Beerstyle = props => {
  console.log("Beerstyle")
  console.log(props)
    return(
        props.dataLoaded ?
            props.styleList.map((x, i) => {
            return (<h1 key={i}  onClick={props.beerOnClick(props.styleList[i].id)}> {props.styleList[i].name} </h1>)
            })
            :
            <p> Loading... </p>
      )
}

export default Beerstyle
