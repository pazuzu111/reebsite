import React from 'react';


const Beerstyle = props => {
    return(

        {props.dataLoaded ?
            props.styleList.map((x, i) {
                <select>
                <option key={i} onClick={props.beerOnClick(props.styleList[i].id)}> {props.styleList[i].name} </option>
                </select>
            })
        }
    )
}

export default Beerstyle
