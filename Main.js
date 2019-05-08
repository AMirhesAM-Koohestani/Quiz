import React from 'react';
import Add from './Add';
import Edit from './Edit';
import NavBar from './NavBar';
import { Switch,BrowserRouter, Route} from "react-router-dom";

class Main extends React.Component {

   render() {
      return (
         <BrowserRouter>
            <NavBar/>
            <Switch>
               <Route 
                  path="/add" exact={true} component={Add}
               />
               <Route
                  path="/edit" component={Edit}
               />
            </Switch>
         </BrowserRouter>
      );
   }

}

export default Main;