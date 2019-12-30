import React from 'react';
import kuriyam from './kuriyam.png';

import {Link} from 'react-router-dom';

class Navbar extends React.Component{

   

    render(){
        return(
            
            <div className="container-fluid bgcol ">
                <nav className = "navbar navbar-default " role = "navigation" >
            <div className = "navbar-header">
                <a href="https://kuriyam.io/"><img className="ml-5 logo" src={kuriyam} width="90px" height="100px"/></a>
            </div>           
            <div>
               <ul className = "navbar-text navbar-right nav-links">
               <Link to="/Home">   <li className="mr-4 color">   HOME </li> </Link>    
               <Link to="/Form">   <li  className="mr-4 color" >   FORM </li> </Link>        
               <Link to="/Projectlist">   <li  className="mr-4 color">  PROJECTLIST </li> </Link>
               <Link to="/Timetracking">    <li  className="mr-4 color">  COMMENTS</li> </Link>
               </ul>
            </div>
         </nav> 

            </div>
            
        )
    }
};
export default Navbar;