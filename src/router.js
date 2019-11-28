import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// import all scenes and components assigned to the router
import Home from 'scenes/Home';

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

/* this component is quite simple, just import into the App.js, and render <Router /> 
   anywhere inside the <BrowserRouter> Component */

export default Router;