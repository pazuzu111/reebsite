import React from 'react'

import { Link } from 'react-router-dom';


const Header = () =>{
return (
      <header>
      <div className="logo">Beer Header Component</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/beer">Beer </Link></li> //this was ice-cream before..
          <li><Link to="/new">Add Another Beer</Link></li> //check this work
        </ul>
      </nav>
    </header>
    )

}



export default Header
