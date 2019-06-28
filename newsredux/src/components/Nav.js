import React from 'react';
import '../css/Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
       <Link to="/" style={{color: "white",float: "left",textDecoration: "inherit",marginTop: "1.7%"}}>
         <logo>Logo</logo></Link>
        <ul className="navlinks">
           <Link to="/" style={{color: "white",textDecoration: "inherit"}}>
             <li style={{border: "1px solid transparents",padding: "5px 10px",borderRadius: "8px",backgroundColor:"green",marginTop:"17px"}}
             >Home</li></Link>
           <Link to="/about" style={{color: "white",textDecoration: "inherit"}}>
             <li style={{border: "1px solid transparent",padding: "5px 10px",borderRadius: "8px",backgroundColor:"green",marginTop:"17px"}}
             >About</li></Link>
           <Link to="/Contact" style={{color: "white",textDecoration: "inherit"}}>
             <li style={{border: "1px solid transparent",padding: "5px 10px",borderRadius: "8px",backgroundColor:"green",marginTop:"17px"}}
             >Contact</li></Link>
        </ul>
    </nav>
  );
}
export default Nav;