import React from 'react';


const Beerlist = props => {


    likeHandler(id){
        e.preventDefault()
        fetch('', {
        method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(id)
    })


    }
    return(

        {props.dataLoaded ?
            props.beerList.map((x, i) {

                <img src={x.url}/>
                <p key={i}>{x.name}</p>
                <p>{x.brewery}</p>
                <p>{x.country}</p>
                <p>{x.abv}</p>
                <button onClick={()=> this.likeHandler(x.id)}> Like! </button>
            })
        }
    )
}

export default Beerlist
