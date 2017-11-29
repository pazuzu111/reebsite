import React from 'react';


const Beerlist = props => {

  function likeHandler(name){
    fetch('/api/beer', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        brewid:name,
      })
    })

  }

  return(
        <div className="beerListContainer">
              <h1> Beer List</h1>
          {props.dataLoaded ?
            props.beerList.map((x, i) => {
              return(
                <div key={i}>
                  <h4>{x.name}</h4>
                  <h4>{x.description}</h4>
                  <h4>Organic: {x.isOrganic}</h4>
                  <h4>{x.abv}</h4>
                  <button onClick={() => likeHandler(x.name)}> add to favorites! </button>
                </div>
              )
            })
            : <p> Select a type of beer to see its list </p>}
        </div>
    )
}
export default Beerlist
