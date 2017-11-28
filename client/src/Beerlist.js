import React from 'react';


const Beerlist = props => {
  console.log("beerlist")
  console.log(props)
  // function likeHandler(e, id){
  //   e.preventDefault()
  //   fetch('/api/beer', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(id)
  //   })
  // }

  return( props.dataLoaded ?
      props.beerList.map((x, i) => {
        return(
          <div>
            <img src={x.url}/>
            <p>{x.name}</p>
            <p>{x.brewery}</p>
            <p>{x.country}</p>
            <p>{x.abv}</p>
          </div>
        )
      })
      : <p> Loading... </p>
    )
}
export default Beerlist
