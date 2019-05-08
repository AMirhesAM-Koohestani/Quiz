import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {

   render() {
      return (
         <div>
         <NavLink to="/add" exact={true}>Add a team </NavLink>
         <NavLink to="/edit" >edit team</NavLink>

         </div>
      );
   }

}

export default NavBar;